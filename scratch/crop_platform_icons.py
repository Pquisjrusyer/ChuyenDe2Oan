from PIL import Image
import os

files = {
    'steam': 'assets/efe9683bc85804059d472260803fb9d037a6894d.png',
    'epic': 'assets/0ba3f8714f3943a121ff8f7c2df272a3410e25a4.png',
    'xbox': 'assets/6554ae6fd57b46bda098add06ae5d7f16e378a1d.png'
}

for name, rel_path in files.items():
    im = Image.open(rel_path)
    w, h = im.size
    print(f'{name} size: {w}x{h}')
    
    # In each 1024x683 image, find the circle bounding box
    # Crop to a square centered on the circular emblem
    # The height is 683. Let's crop width from (w - h)//2 to (w + h)//2 so it is a perfect 683x683 square!
    left = (w - h) // 2
    top = 0
    right = left + h
    bottom = h
    
    cropped = im.crop((left, top, right, bottom))
    out_path = f'assets/platform_{name}_square.png'
    cropped.save(out_path)
    print(f'Saved {out_path} ({cropped.size})')
