import { defineConfig, loadEnv } from 'vite';
import https from 'https';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    base: './',
    root: '.',
    publicDir: 'public',
    build: {
      outDir: 'dist',
    },
    server: {
      port: 3000,
      open: true,
    },
    plugins: [
      {
        name: 'resend-email-api-server',
        configureServer(server) {
          server.middlewares.use('/api/send-email', async (req, res) => {
            if (req.method !== 'POST') {
              res.statusCode = 405;
              res.end(JSON.stringify({ error: 'Method Not Allowed' }));
              return;
            }

            let body = '';
            req.on('data', chunk => {
              body += chunk;
            });

            req.on('end', async () => {
              try {
                const data = JSON.parse(body || '{}');
                const { apiKey, from, to, subject, html } = data;

                const activeApiKey = apiKey || env.RESEND_API_KEY || env.VITE_RESEND_API_KEY || process.env.RESEND_API_KEY || process.env.VITE_RESEND_API_KEY || '';

                if (!activeApiKey) {
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({
                    success: false,
                    simulated: true,
                    message: 'Chưa có Resend API Key. Vui lòng cung cấp key re_... để gửi mail thực tế.',
                  }));
                  return;
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

                const apiReq = https.request(options, apiRes => {
                  let apiBody = '';
                  apiRes.on('data', chunk => {
                    apiBody += chunk;
                  });
                  apiRes.on('end', () => {
                    res.setHeader('Content-Type', 'application/json');
                    try {
                      const result = JSON.parse(apiBody);

                      // Handle Resend Sandbox limitation (only delivers to account owner's email)
                      if (apiRes.statusCode === 403 && result.message && result.message.includes('only send testing emails to your own email address')) {
                        const ownerEmailMatch = result.message.match(/\(([^)]+)\)/);
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
                        }, fbRes => {
                          let fbBody = '';
                          fbRes.on('data', c => fbBody += c);
                          fbRes.on('end', () => {
                            res.statusCode = 200;
                            res.end(JSON.stringify({
                              success: true,
                              sandboxRedirected: true,
                              ownerEmail: ownerEmail,
                              originalRecipient: to,
                              id: JSON.parse(fbBody || '{}').id
                            }));
                          });
                        });
                        fallbackReq.write(fallbackPayload);
                        fallbackReq.end();
                        return;
                      }

                      res.statusCode = apiRes.statusCode || 200;
                      res.end(JSON.stringify(result));
                    } catch {
                      res.statusCode = apiRes.statusCode || 200;
                      res.end(apiBody);
                    }
                  });
                });

                apiReq.on('error', err => {
                  res.setHeader('Content-Type', 'application/json');
                  res.statusCode = 500;
                  res.end(JSON.stringify({ success: false, error: err.message }));
                });

                apiReq.write(payload);
                apiReq.end();
              } catch (err) {
                res.setHeader('Content-Type', 'application/json');
                res.statusCode = 400;
                res.end(JSON.stringify({ success: false, error: err.message }));
              }
            });
          });
        },
      },
    ],
  };
});
