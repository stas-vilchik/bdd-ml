{
  let r = Math.max(0, d) / 2;
  shapeContext.clearRect(0, 0, shapeCanvas.width, shapeCanvas.height);
  shapeContext.beginPath();
  shapeContext.arc(r * gap, r * gap, r * gap, 0, 2 * Math.PI, false);
  shapeContext.fill();
  shapeContext.closePath();
  return processCanvas();
}
