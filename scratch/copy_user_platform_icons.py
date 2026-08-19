import os, shutil
from PIL import Image

src_dir = r'F:\DOWNLOAD FOR CHROME AND EDGE\ico\icon neefn tang'
files = os.listdir(src_dir)

for i, f in enumerate(files):
    full_p = os.path.join(src_dir, f)
    im = Image.open(full_p)
    print(f'File {i}: size={os.path.getsize(full_p)}, dim={im.size}')
    
    if f == '_.png':
        dest = 'assets/icon_nen_tang_steam.png'
    elif '2' in f:
        dest = 'assets/icon_nen_tang_epic.png'
    elif '3' in f:
        dest = 'assets/icon_nen_tang_xbox.png'
    else:
        dest = f'assets/icon_nen_tang_{i}.png'
    
    shutil.copy2(full_p, dest)
    print(f'Saved to {dest}')
