with open('f:/PROJECT-SOFTWARE/OanNe/assets/cau_hinh_btn.svg', 'r', encoding='utf-8') as f:
    content = f.read()

lines = content.split('\n')

# Line 6 (rect pattern1)
lines[6] = '<rect x="-66" y="-160" width="953" height="471" fill="url(#pattern1_1195_78480)" opacity="0.45" style="mix-blend-mode:overlay"/>'

# Move line 31 (text path CẤU HÌNH HỆ THỐNG) to topmost layer before line 38 (</g>)
text_path = lines[31]
new_lines = lines[:31] + lines[32:37] + [text_path] + lines[37:]

fixed_content = '\n'.join(new_lines)
with open('f:/PROJECT-SOFTWARE/OanNe/assets/cau_hinh_btn.svg', 'w', encoding='utf-8') as f:
    f.write(fixed_content)

print('Updated cau_hinh_btn.svg! Total lines:', len(new_lines))
