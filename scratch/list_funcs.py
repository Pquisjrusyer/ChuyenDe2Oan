import re

with open('scratch/register_full_code.tsx', 'r', encoding='utf-8') as f:
    code = f.read()

funcs = re.findall(r'function\s+(\w+)\s*\(([^)]*)\)', code)
print('Functions defined in register_full_code.tsx:')
for fn, args in funcs:
    print(f'- {fn}({args})')
