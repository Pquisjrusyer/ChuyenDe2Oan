from PIL import Image

files = {
    'steam': 'assets/efe9683bc85804059d472260803fb9d037a6894d.png',
    'epic': 'assets/0ba3f8714f3943a121ff8f7c2df272a3410e25a4.png',
    'xbox': 'assets/6554ae6fd57b46bda098add06ae5d7f16e378a1d.png'
}

# In each image, the medal content bounding box is:
# steam: bbox=(26, 14, 1013, 662) -> width=987, height=648
# epic: bbox=(21, 26, 1001, 672) -> width=980, height=646
# xbox: bbox=(37, 27, 1004, 657) -> width=967, height=630

for name, rel_path in files.items():
    im = Image.open(rel_path).convert('RGBA')
    
    # We crop tightly to the medal bounding box
    if name == 'steam':
        crop_box = (20, 10, 1015, 665)
    elif name == 'epic':
        crop_box = (15, 20, 1005, 675)
    else: # xbox
        crop_box = (30, 20, 1010, 660)
        
    cropped_medal = im.crop(crop_box)
    
    # Now, resize the cropped medal to a PERFECT 1:1 SQUARE (e.g. 512x512)
    # This restores the true circular proportion (removes the oval stretch/distortion)!
    square_medal = cropped_medal.resize((512, 512), Image.Resampling.LANCZOS)
    
    # Save as true circular medal
    out_path = f'assets/platform_{name}_true_circle.png'
    square_medal.save(out_path)
    print(f'Successfully generated true circular medal: {out_path}')
