import re, urllib.request, os

with open('scratch/register_full_code.tsx', 'r', encoding='utf-8') as f:
    code = f.read()

imgs = re.findall(r'const\s+(\w+)\s*=\s*"http://localhost:3845/assets/([^"]+)";', code)
print(f'Total unique assets: {len(set(f for _, f in imgs))}')

for name, filename in imgs:
    url = f'http://localhost:3845/assets/{filename}'
    dest = f'f:/PROJECT-SOFTWARE/OanNe/assets/{filename}'
    if not os.path.exists(dest):
        try:
            req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
            with urllib.request.urlopen(req, timeout=3) as resp, open(dest, 'wb') as out:
                out.write(resp.read())
            print(f'Downloaded {name}: {filename} ({os.path.getsize(dest)} bytes)')
        except Exception as e:
            print(f'Error {filename}: {e}')
    else:
        print(f'Exists {name}: {filename}')
