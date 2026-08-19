const fs = require('fs');

const sec1 = JSON.parse(fs.readFileSync('f:/PROJECT-SOFTWARE/OanNe/scratch/register_sec1_hero.json', 'utf8'));
const sec2 = JSON.parse(fs.readFileSync('f:/PROJECT-SOFTWARE/OanNe/scratch/register_sec2_cta_cards.json', 'utf8'));
const sec3 = JSON.parse(fs.readFileSync('f:/PROJECT-SOFTWARE/OanNe/scratch/register_sec3_form.json', 'utf8'));
const sec4 = JSON.parse(fs.readFileSync('f:/PROJECT-SOFTWARE/OanNe/scratch/register_sec4_third_party.json', 'utf8'));

console.log('=== SEC 1: HERO ===');
console.log(sec1.result.content[0].text.slice(0, 800));

console.log('\n=== SEC 2: CTA CARDS ===');
console.log(sec2.result.content[0].text.slice(0, 800));

console.log('\n=== SEC 3: FORM ===');
console.log(sec3.result.content[0].text.slice(0, 800));

console.log('\n=== SEC 4: THIRD PARTY ===');
console.log(sec4.result.content[0].text.slice(0, 800));
