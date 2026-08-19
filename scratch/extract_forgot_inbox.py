import json, re, os, urllib.request

for node_file, code_out in [('scratch/node_1316_80681.json', 'scratch/forgot_pass_code.tsx'), ('scratch/node_1316_81054.json', 'scratch/check_inbox_code.tsx')]:
    with open(node_file, 'r', encoding='utf-8') as f:
        data = json.load(f)
    content = data.get('result', {}).get('content', [])
    code = content[0].get('text', '')
    with open(code_out, 'w', encoding='utf-8') as out:
        out.write(code)
    print(f'Saved {code_out} ({len(code)} bytes)')
    
    imgs = re.findall(r'const\s+(\w+)\s*=\s*"http://localhost:3845/assets/([^"]+)";', code)
    for name, filename in imgs:
        url = f'http://localhost:3845/assets/{filename}'
        dest = f'f:/PROJECT-SOFTWARE/OanNe/assets/{filename}'
        if not os.path.exists(dest):
            try:
                urllib.request.urlretrieve(url, dest)
                print(f'Downloaded {name}: {filename}')
            except Exception as e:
                print(f'Error downloading {filename}: {e}')
