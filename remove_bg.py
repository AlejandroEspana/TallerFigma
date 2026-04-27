import os
from PIL import Image

public_dir = "public"
images = ["Img1.png", "Img2.png", "Img3.png", "Img4.png", "Img5.png"]

for img_name in images:
    path = os.path.join(public_dir, img_name)
    if os.path.exists(path):
        img = Image.open(path)
        img = img.convert("RGBA")
        datas = img.getdata()
        
        newData = []
        for item in datas:
            # item is (R, G, B, A)
            # If the pixel is close to white, make it transparent
            if item[0] > 240 and item[1] > 240 and item[2] > 240:
                newData.append((255, 255, 255, 0))
            else:
                newData.append(item)
                
        img.putdata(newData)
        img.save(path, "PNG")
        print(f"Processed {img_name}")
    else:
        print(f"{img_name} not found")
