import re, urllib.request, os

with open('scratch/register_full_code.tsx', 'r', encoding='utf-8') as f:
    code = f.read()

imgs = re.findall(r'const\s+(\w+)\s*=\s*"http://localhost:3845/assets/([^"]+)";', code)
print(f'Total image constants: {len(imgs)}')

downloaded = 0
for name, filename in imgs:
    url = f'http://localhost:3845/assets/{filename}'
    dest = f'f:/PROJECT-SOFTWARE/OanNe/assets/{filename}'
    if not os.path.exists(dest):
        try:
            urllib.request.urlretrieve(url, dest)
            print(f'Downloaded {name}: {filename} ({os.path.getsize(dest)} bytes)')
            downloaded += 1
        except Exception as e:
            print(f'Error {filename}: {e}')
    else:
        print(f'Already exists {name}: {filename}')

print(f'Done! Downloaded {downloaded} new assets.')
