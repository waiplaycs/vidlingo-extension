class OCRClient {
  constructor() {
    this.API_ENDPOINT = 'http://localhost:8000/ocr'
    this.cache = new Map()
  }

  async sendFrame(frameData) {
    const hash = await this.calcFrameHash(frameData)
    if (this.cache.has(hash)) return this.cache.get(hash)

    const response = await fetch(this.API_ENDPOINT, {
      method: 'POST',
      body: this.prepareFramePayload(frameData)
    })
    
    const result = await response.json()
    this.cache.set(hash, result)
    return result
  }

  prepareFramePayload(frame) {
    // 實作 WebGL 紋理轉換為 JPEG 的機制
  }
}