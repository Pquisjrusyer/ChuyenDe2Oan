const fs = require('fs');

const sec1 = JSON.parse(fs.readFileSync('f:/PROJECT-SOFTWARE/OanNe/scratch/register_sec1_hero.json', 'utf8'));
const sec2 = JSON.parse(fs.readFileSync('f:/PROJECT-SOFTWARE/OanNe/scratch/register_sec2_cta_cards.json', 'utf8'));
const sec3 = JSON.parse(fs.readFileSync('f:/PROJECT-SOFTWARE/OanNe/scratch/register_sec3_form.json', 'utf8'));
const sec4 = JSON.parse(fs.readFileSync('f:/PROJECT-SOFTWARE/OanNe/scratch/register_sec4_third_party.json', 'utf8'));

fs.writeFileSync('f:/PROJECT-SOFTWARE/OanNe/scratch/sec1.txt', sec1.result.content[0].text);
fs.writeFileSync('f:/PROJECT-SOFTWARE/OanNe/scratch/sec2.txt', sec2.result.content[0].text);
fs.writeFileSync('f:/PROJECT-SOFTWARE/OanNe/scratch/sec3.txt', sec3.result.content[0].text);
fs.writeFileSync('f:/PROJECT-SOFTWARE/OanNe/scratch/sec4.txt', sec4.result.content[0].text);

console.log('Saved all 4 section code files to scratch/sec1.txt, sec2.txt, sec3.txt, sec4.txt!');
