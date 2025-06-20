from fastapi import FastAPI, File
from paddleocr import PaddleOCR
import numpy as np
import cv2

app = FastAPI()
ocr_engine = PaddleOCR(use_gpu=True, lang='ch')

@app.post('/ocr')
async def process_frame(image: bytes = File(...)):
    nparr = np.frombuffer(image, np.uint8)
    img = cv2.imdecode(nparr, cv2.IMREAD_COLOR)
    result = ocr_engine.ocr(img)
    return {'text_blocks': result}