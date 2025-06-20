class FrameAnalyzer {
  constructor() {
    this.lastFrameHash = null
    this.diffThreshold = 0.15
  }

  async processFrame(videoElement) {
    const frameHash = await this.calcPerceptualHash(videoElement)
    
    if (!this.lastFrameHash || 
        this.hammingDistance(frameHash, this.lastFrameHash) > this.diffThreshold) {
      this.lastFrameHash = frameHash
      self.postMessage({ type: 'frameChanged' })
    }
  }

  calcPerceptualHash(video) {
    // 實作基於 WebGL 的感知哈希計算
  }

  hammingDistance(hash1, hash2) {
    // 漢明距離計算邏輯
  }
}

self.addEventListener('message', ({ data }) => {
  new FrameAnalyzer().processFrame(data.video)
})