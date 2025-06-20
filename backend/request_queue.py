# GPU 加速批次處理
async def _run_paddleocr(self, images):
    with paddle.fluid.dygraph.guard(): 
        return await asyncio.to_thread(
            paddleocr.batch_process,
            images,
            use_gpu=True
        )