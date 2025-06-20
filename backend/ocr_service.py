from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=['chrome-extension://*'],
    allow_methods=['POST'],
    allow_headers=['Content-Type']
)

@app.post('/ocr')
async def process_frame(image: bytes = File(...)):
    # 新增 GPU 記憶體監控邏輯
    gpu_usage = get_gpu_utilization()
    if gpu_usage > 0.8:
        return {'error': 'GPU_OVERLOAD'}
    # 原有 OCR 處理邏輯