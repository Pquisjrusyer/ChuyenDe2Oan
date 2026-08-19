from PIL import Image
import numpy as np

files = {
    'steam': 'assets/efe9683bc85804059d472260803fb9d037a6894d.png',
    'epic': 'assets/0ba3f8714f3943a121ff8f7c2df272a3410e25a4.png',
    'xbox': 'assets/6554ae6fd57b46bda098add06ae5d7f16e378a1d.png'
}

for name, rel_path in files.items():
    im = Image.open(rel_path).convert('RGBA')
    arr = np.array(im)
    # find where alpha > 20 and rgb > 10
    mask = (arr[:, :, 3] > 20) & ((arr[:, :, 0] > 10) | (arr[:, :, 1] > 10) | (arr[:, :, 2] > 10))
    y_indices, x_indices = np.where(mask)
    if len(y_indices) > 0:
        min_y, max_y = y_indices.min(), y_indices.max()
        min_x, max_x = x_indices.min(), x_indices.max()
        
        # Center of the medal
        cy = (min_y + max_y) // 2
        cx = (min_x + max_x) // 2
        
        # Diameter of the circle (max of height and width of content)
        diameter = max(max_y - min_y, max_x - min_x)
        radius = diameter // 2 + 10
        
        box = (max(0, cx - radius), max(0, cy - radius), min(im.width, cx + radius), min(im.height, cy + radius))
        cropped = im.crop(box)
        
        # Resize to 512x512 exact square
        resized = cropped.resize((512, 512), Image.Resampling.LANCZOS)
        out_path = f'assets/platform_{name}_perfect_circle.png'
        resized.save(out_path)
        print(f'{name}: bbox=({min_x}, {min_y}, {max_x}, {max_y}), center=({cx}, {cy}), diameter={diameter} -> saved {out_path}')
