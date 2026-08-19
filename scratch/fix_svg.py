with open('f:/PROJECT-SOFTWARE/OanNe/assets/tai_ngay_btn.svg', 'r', encoding='utf-8') as f:
    content = f.read()

lines = content.split('\n')

icon_text = [lines[32], lines[33], lines[34]]
lines[6] = '<rect x="12" y="-14" width="364" height="180" fill="url(#pattern1_1195_78479)" opacity="0.4" style="mix-blend-mode:overlay"/>'

new_lines = lines[:32] + lines[35:39] + icon_text + lines[39:]

fixed_content = '\n'.join(new_lines)

with open('f:/PROJECT-SOFTWARE/OanNe/assets/tai_ngay_btn.svg', 'w', encoding='utf-8') as f:
    f.write(fixed_content)

print('Successfully reordered icon and text in tai_ngay_btn.svg!')
