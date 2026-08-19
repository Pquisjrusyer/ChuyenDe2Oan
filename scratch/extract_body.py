import re

with open('f:/PROJECT-SOFTWARE/OanNe/scratch/download_full_page.txt', 'r', encoding='utf-8') as f:
    text = f.read()

# find all top level children of TiGameDesktop
start_idx = text.find('export default function')
if start_idx != -1:
    body = text[start_idx:]
    with open('f:/PROJECT-SOFTWARE/OanNe/scratch/body_download.txt', 'w', encoding='utf-8') as out:
        out.write(body)
    print("Done")
