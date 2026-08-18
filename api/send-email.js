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
