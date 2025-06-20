class FrameAnalyzer {
  constructor() {
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.diffThreshold = 0.1;
  }

  analyze(video) {
    this.canvas.width = video.videoWidth;
    this.canvas.height = video.videoHeight;
    this.ctx.drawImage(video, 0, 0);
    return this.detectFrameChanges();
  }

  detectFrameChanges() {
    // 實作畫面差異比對算法
  }
}