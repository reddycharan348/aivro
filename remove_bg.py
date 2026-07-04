import os
from rembg import remove
from PIL import Image
import concurrent.futures

def process_image(img_path):
    # Output path - replace .jpg with .png
    out_path = img_path.replace('.jpg', '.png')
    if os.path.exists(out_path):
        return f"Skipped {img_path}"
        
    try:
        input_image = Image.open(img_path)
        output_image = remove(input_image)
        output_image.save(out_path)
        return f"Processed {img_path}"
    except Exception as e:
        return f"Error {img_path}: {e}"

def main():
    folder_path = 'public/images/frames'
    files = [os.path.join(folder_path, f) for f in os.listdir(folder_path) if f.endswith('.jpg')]
    
    print(f"Processing {len(files)} files...")
    
    # Process sequentially or use ThreadPoolExecutor
    # rembg uses ONNX which can be heavy, let's limit workers
    with concurrent.futures.ThreadPoolExecutor(max_workers=4) as executor:
        results = list(executor.map(process_image, files))
        
    for r in results:
        print(r)
        
    print("Done removing backgrounds.")

if __name__ == '__main__':
    main()
