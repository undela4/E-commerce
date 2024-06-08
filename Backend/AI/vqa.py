from PIL import Image
from transformers import BlipProcessor, BlipForQuestionAnswering
import sys
import os
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '2'  # Suppress TensorFlow INFO messages

processor = BlipProcessor.from_pretrained("Salesforce/blip-vqa-base")
model = BlipForQuestionAnswering.from_pretrained("Salesforce/blip-vqa-base").to("cpu")  # Use CPU

def get_answer(image_path, question):
    
    raw_image = Image.open(image_path).convert('RGB')
    inputs = processor(raw_image, question, return_tensors="pt").to("cpu")  # Use CPU
    out = model.generate(**inputs)
    return processor.decode(out[0], skip_special_tokens=True)

if __name__ == "__main__":
    image_path = sys.argv[1]
    question = sys.argv[2]
    print(get_answer(image_path, question))