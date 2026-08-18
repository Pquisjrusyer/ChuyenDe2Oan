import os
import re
import urllib.request
from concurrent.futures import ThreadPoolExecutor

with open('f:/PROJECT-SOFTWARE/OanNe/scratch/download_figma_dump.txt', 'r', encoding='utf-8') as f:
    text = f.read()

matches = set(re.findall(r'http://localhost:3845/assets/([a-zA-Z0-9_\-\.]+?\.(?:png|jpg|jpeg|svg|webp))', text))
print(f"Found {len(matches)} unique assets in download_figma_dump.txt")

os.makedirs('f:/PROJECT-SOFTWARE/OanNe/public/assets', exist_ok=True)

def download_one(filename):
    dest = os.path.join('f:/PROJECT-SOFTWARE/OanNe/public/assets', filename)
    if os.path.exists(dest) and os.path.getsize(dest) > 0:
        return f"EXISTS: {filename}"
    src_url = f"http://localhost:3845/assets/{filename}"
    try:
        req = urllib.request.Request(src_url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, timeout=8) as resp:
            data = resp.read()
            with open(dest, 'wb') as out_f:
                out_f.write(data)
        return f"DOWNLOADED: {filename} ({len(data)} bytes)"
    except Exception as e:
        return f"FAILED: {filename} ({e})"

with ThreadPoolExecutor(max_workers=8) as executor:
    results = list(executor.map(download_one, sorted(matches)))

for r in results:
    print(r)
