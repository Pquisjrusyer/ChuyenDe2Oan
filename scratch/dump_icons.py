import re

with open('scratch/register_full_code.tsx', 'r', encoding='utf-8') as f:
    code = f.read()

m = re.findall(r'(function IconNeefnTang[\s\S]*?\n\})', code)
with open('scratch/icon_neefn_tang.txt', 'w', encoding='utf-8') as out:
    for x in m:
        out.write(x + '\n\n')

# Check also in sec4.txt
with open('scratch/sec4.txt', 'r', encoding='utf-8') as f:
    sec4 = f.read()
with open('scratch/icon_neefn_tang.txt', 'a', encoding='utf-8') as out:
    out.write('--- SEC4.TXT ---\n' + sec4)

print('Saved to scratch/icon_neefn_tang.txt')
