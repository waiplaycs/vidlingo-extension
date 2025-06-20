// IoU 計算實現
_isSameArea(box1, box2, threshold=0.7) {
  const interLeft = Math.max(box1.x, box2.x);
  const interTop = Math.max(box1.y, box2.y);
  const interRight = Math.min(box1.x + box1.w, box2.x + box2.w);
  const interBottom = Math.min(box1.y + box1.h, box2.y + box2.h);
  
  if (interRight < interLeft || interBottom < interTop) return false;
  
  const interArea = (interRight - interLeft) * (interBottom - interTop);
  const unionArea = box1.w * box1.h + box2.w * box2.h - interArea;
  return (interArea / unionArea) >= threshold;
}