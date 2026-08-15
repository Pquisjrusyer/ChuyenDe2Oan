import fs from 'fs';
import path from 'path';

const ASSETS = [
  "ab82be110bd31c8435140d031f210d8017da82c7.png",
  "603524daa3adf33690676d71b7139b4dd432dcbd.png",
  "105ebc7cda031fdb485695b18a341cec252f1d95.png",
  "a1b7e3991a46b5a64f1f7dac3536b09a9e87a8ba.png",
  "0d6b9966ff2827a216126f97de3fae66e8b0f69d.png",
  "b79797a578ff3bade63860ad5c0b944b225dec8c.png",
  "2486c6adcf88fddc97c440c78c0892707c2e7708.png",
  "a52a7c4b8dc8beffb2f5577f0501b16b1cfce647.png",
  "18c99e59fbe5fb1f1a0cf0ff28f9c309e0b87822.png",
  "ea8df93482c54ccfe7b61d0a530fea954eb54fd3.png",
  "ef153740e0922100a32bd773556056890c14443c.png",
  "00014c9e034cf03185fa6abecbdda1f84052f9ed.svg",
  "5c728d5be890a1c11dd44ea608aabf2ec504887a.svg",
  "07092503416c73ca4af4965cb97a13f4c989250d.png",
  "73240ed6730c1a47cf16f08d416c9d0f49066a7f.png",
  "5af1160b5e6bd34a450d6078f05c69de40fe1f51.png",
  "75d8346ad7a78fc853eb527205ee564bbe2a4a9e.png",
  "c937222bc604d2c5219a0e2c8560160851688776.svg",
  "c54cc056b3379d973346c7bd70f72a0299f7f83b.svg",
  "d098db1d15940ffecbffae778ecf9c372760990c.svg",
  "7f3dfa7968d074d157fd5210ffb7c2696fd17563.svg",
  "85e836b5902a33978179ca3708504d5b1b743653.svg",
  "9ebe0ae5ac1b5cafa35d80422474abb970a6f2e6.png",
  "2342fe1d72d38244b854bdf6f8b202d59e268a64.png",
  "8c4a75cd6477ddb747691f32d966471842b24212.png",
  "72cb7e1d35b96eac40bc86451109f1fb5fc22dd7.png",
  "06108d6a32c6b959fbb88b8e7fcc55f617e6b82d.png",
  "24688bb05ebb5d4e8b2b074d60bc3cc966dfa17c.png",
  "2c9d80e984a0e3cf97699642b5308eecc1791abe.png",
  "b6f87ac59763ae763887dcb36e77095e4736f402.svg",
  "156dda15a79ccb03f71457c8f40aaf6449b1aa22.svg",
  "b54688f4a2177859de11c78883b411be33182ae4.png",
  "080542d143f6abbad99cd001eebc66924018d9bc.png",
  "0e5d792e9bc9ba502ded578888d8321bdf366431.png",
  "5cd0da7475fc2d3e62605f4cd60ff8d2fcb7546f.png",
  "5b1f96dba84e508bc260d61529c98412d108bded.png",
  "b76c78172d6e968ff30b0ac750540bc810f0b636.png",
  "278b0fac7f3b287f74867a1861b629f059373513.png",
  "695f80586e381ccdef09653aec06c99619731400.svg",
  "0f7ddffb5d788ce2cb19167eabb559841e8fa1c4.svg",
  "5c52f798d7c7bdc3230da07286ab6f7c2d72dd20.svg",
  "b3d1851d66545a96e4c4c58b9de0380549725b19.svg",
  "79865e542615851eb9071015d22e671958feb5a7.svg",
  "e76ecda0d692864bfa2f45cdf168a58e7724c37e.png",
  "8d535e5186d5115ccc9a5c72e883cc54bda667bd.png",
  "de199cd00f2de8d3061f6e4a81dc16eff89caf6c.png",
  "2a7f7a6f7f25bf8fa8035a56e87eeb105e0f7a2a.png",
  "05c551376248ffa1592286380f2c9be7d8fca9cf.png",
  "d1935b33d274329ef3c82af24561520b9538b87c.png",
  "ebce7d117f8249d5870594e3ee0332d470ca4e98.png",
  "c73dce09bceb4417c3bbff6a505e25fe4de7c8b2.png",
  "982de4bcd6a16630803542fbfab99bbf3ff3563d.png",
  "239dc59dcfee9a7ff13a48bcacb475e04a11730c.svg",
  "28d4a7f33388d842d3f8f50bf4fbcbf5af46e4b4.svg",
  "5280884719d4359c523e1bb78c45cf2c8b6ffab0.svg"
];

const outDir = path.resolve('public/assets');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

async function downloadAll() {
  console.log(`Downloading ${ASSETS.length} assets from localhost:3845...`);
  let success = 0;
  for (const filename of ASSETS) {
    const url = `http://localhost:3845/assets/${filename}`;
    const dest = path.join(outDir, filename);
    try {
      const res = await fetch(url);
      if (res.ok) {
        const buffer = await res.arrayBuffer();
        fs.writeFileSync(dest, Buffer.from(buffer));
        success++;
      } else {
        console.warn(`Failed (${res.status}): ${filename}`);
      }
    } catch (e) {
      console.warn(`Error downloading ${filename}: ${e.message}`);
    }
  }
  console.log(`Successfully downloaded ${success}/${ASSETS.length} assets to public/assets/`);
}

downloadAll();
