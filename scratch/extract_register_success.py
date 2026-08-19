import json, re, urllib.request, os

with open('scratch/node_1332_84911.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

content = data.get('result', {}).get('content', [])
print('Content length:', len(content))
code = content[0].get('text', '')

with open('scratch/register_success_code.tsx', 'w', encoding='utf-8') as out:
    out.write(code)

print('Saved code to scratch/register_success_code.tsx!')

imgs = re.findall(r'const\s+(\w+)\s*=\s*"http://localhost:3845/assets/([^"]+)";', code)
print(f'Total assets found: {len(imgs)}')

for name, filename in imgs:
    url = f'http://localhost:3845/assets/{filename}'
    dest = f'f:/PROJECT-SOFTWARE/OanNe/assets/{filename}'
    if not os.path.exists(dest):
        try:
            urllib.request.urlretrieve(url, dest)
            print(f'Downloaded {name}: {filename} ({os.path.getsize(dest)} bytes)')
        except Exception as e:
            print(f'Error downloading {filename}: {e}')
    else:
        print(f'Already exists {name}: {filename}')
