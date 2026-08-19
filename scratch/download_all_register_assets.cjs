const http = require('http');
const fs = require('fs');
const path = require('path');

const files = [
  'register_sec1_hero.json',
  'register_sec2_cta_cards.json',
  'register_sec3_form.json',
  'register_sec4_third_party.json'
];

const urls = new Set();

for (const f of files) {
  const json = JSON.parse(fs.readFileSync(`f:/PROJECT-SOFTWARE/OanNe/scratch/${f}`, 'utf8'));
  const text = json.result.content[0].text;
  const matches = text.match(/http:\/\/localhost:3845\/assets\/[a-f0-9]+(\.[a-z0-9]+)?/g);
  if (matches) {
    for (const u of matches) {
      urls.add(u);
    }
  }
}

console.log('Found total unique asset URLs:', urls.size);

async function download(url) {
  const filename = path.basename(url);
  const dest = path.join('f:/PROJECT-SOFTWARE/OanNe/assets', filename);
  if (fs.existsSync(dest) && fs.statSync(dest).size > 0) {
    console.log('Already exists:', filename);
    return;
  }
  return new Promise((resolve) => {
    const file = fs.createWriteStream(dest);
    http.get(url, (res) => {
      res.pipe(file);
      file.on('finish', () => {
        file.close(() => {
          console.log('Downloaded:', filename, fs.statSync(dest).size, 'bytes');
          resolve();
        });
      });
    }).on('error', (err) => {
      console.error('Error downloading:', filename, err);
      resolve();
    });
  });
}

(async () => {
  for (const u of urls) {
    await download(u);
  }
  console.log('Finished downloading all assets!');
})();
