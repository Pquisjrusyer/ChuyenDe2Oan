import https from 'https';

export default async function handler(req, res) {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { apiKey, from, to, subject, html } = req.body || {};
    const activeApiKey = apiKey || process.env.RESEND_API_KEY || process.env.VITE_RESEND_API_KEY;

    if (!activeApiKey) {
      return res.status(400).json({
        success: false,
        error: 'Missing RESEND_API_KEY in environment variables or request body.',
      });
    }

    const payload = JSON.stringify({
      from: from || 'OAN Game <onboarding@resend.dev>',
      to: Array.isArray(to) ? to : [to],
      subject: subject || '📜 [OÁN] Thư Tri Ân & Phong Ấn Giao Ước Nhà Hứa',
      html: html,
    });

    const options = {
      hostname: 'api.resend.com',
      path: '/emails',
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${activeApiKey}`,
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(payload),
      },
    };

    return new Promise((resolve) => {
      const apiReq = https.request(options, (apiRes) => {
        let apiData = '';
        apiRes.on('data', (chunk) => {
          apiData += chunk;
        });
        apiRes.on('end', () => {
          try {
            const parsed = JSON.parse(apiData || '{}');

            // Handle Resend Sandbox restriction (only sends to account owner email)
            if (apiRes.statusCode === 403 && parsed.message && parsed.message.includes('only send testing emails to your own email address')) {
              const ownerEmailMatch = parsed.message.match(/\(([^)]+)\)/);
              const ownerEmail = (ownerEmailMatch && ownerEmailMatch[1]) || 'hpq.graphicdesign.afitel.15022003@gmail.com';

              const fallbackPayload = JSON.stringify({
                from: from || 'OAN Game <onboarding@resend.dev>',
                to: [ownerEmail],
                subject: `${subject || '📜 [OÁN] Thư Phong Ấn'} [Test gửi cho: ${Array.isArray(to) ? to.join(', ') : to}]`,
                html: `
                  <div style="background:#2a0505;border:1px solid #9c7e21;padding:12px;margin-bottom:20px;border-radius:4px;color:#ffffff;font-family:sans-serif;font-size:13px;">
                    🔔 <strong>[Resend Sandbox Notice]:</strong> Email này được chuyển tiếp tự động về hòm thư chủ tài khoản (<strong>${ownerEmail}</strong>) vì bạn đang dùng gói Resend Sandbox thử nghiệm. Người nhận đăng ký ban đầu là: <strong>${Array.isArray(to) ? to.join(', ') : to}</strong>.
                  </div>
                  ${html}
                `,
              });

              const fallbackReq = https.request({
                ...options,
                headers: {
                  ...options.headers,
                  'Content-Length': Buffer.byteLength(fallbackPayload),
                }
              }, (fbRes) => {
                let fbData = '';
                fbRes.on('data', c => fbData += c);
                fbRes.on('end', () => {
                  res.status(200).json({
                    success: true,
                    sandboxRedirected: true,
                    ownerEmail: ownerEmail,
                    originalRecipient: to,
                    id: JSON.parse(fbData || '{}').id
                  });
                  resolve();
                });
              });

              fallbackReq.on('error', () => {
                res.status(200).json(parsed);
                resolve();
              });

              fallbackReq.write(fallbackPayload);
              fallbackReq.end();
              return;
            }

            res.status(apiRes.statusCode || 200).json(parsed);
          } catch (e) {
            res.status(apiRes.statusCode || 200).send(apiData);
          }
          resolve();
        });
      });

      apiReq.on('error', (err) => {
        res.status(500).json({ success: false, error: err.message });
        resolve();
      });

      apiReq.write(payload);
      apiReq.end();
    });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
}
