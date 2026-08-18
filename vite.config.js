import { defineConfig } from 'vite';
import https from 'https';

export default defineConfig({
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

              if (!apiKey) {
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
                  'Authorization': `Bearer ${apiKey}`,
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
                  res.statusCode = apiRes.statusCode || 200;
                  try {
                    const result = JSON.parse(apiBody);
                    res.end(JSON.stringify(result));
                  } catch {
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
});

