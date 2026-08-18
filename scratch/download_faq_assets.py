import os
import re
import urllib.request

asset_urls = set()
for fn in ['faq_hero.txt', 'faq_questions.txt', 'faq_links.txt', 'faq_still_help.txt', 'faq_ready_contact.txt']:
    p = os.path.join('f:/PROJECT-SOFTWARE/OanNe/scratch', fn)
    if os.path.exists(p):
        with open(p, 'r', encoding='utf-8') as f:
            text = f.read()
            matches = re.findall(r'http://localhost:3845/assets/([a-f0-9\.\_\-]+)', text)
            for m in matches:
                asset_urls.add(m)

print(f"Total unique assets needed for FAQ: {len(asset_urls)}")

os.makedirs('f:/PROJECT-SOFTWARE/OanNe/public/assets', exist_ok=True)
downloaded = 0
already_have = 0

for filename in sorted(asset_urls):
    dest = os.path.join('f:/PROJECT-SOFTWARE/OanNe/public/assets', filename)
    if os.path.exists(dest):
        already_have += 1
    else:
        src_url = f"http://localhost:3845/assets/{filename}"
        try:
            urllib.request.urlretrieve(src_url, dest)
            print(f"Downloaded: {filename}")
            downloaded += 1
        except Exception as e:
            print(f"Failed to download {filename}: {e}")

print(f"Status: {already_have} already present, {downloaded} newly downloaded.")
