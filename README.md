# VidLingo Chrome Extension

實時影片翻譯解決方案

## 技術架構
```mermaid
flowchart TD
  A[影片畫面] --> B(GPU預處理)
  B --> C{畫面變化偵測}
  C -->|是| D[OCR辨識]
  D --> E[翻譯引擎]
  E --> F[排版渲染]
```