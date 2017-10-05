{
  let s = 0;
  setFontSize(fontSize);
  s = Math.min(
    fontSize,
    shapeCanvas.width / shapeContext.measureText(l).width * 0.8 * fontSize,
    shapeCanvas.height / fontSize * (isNumber(l) ? 1 : 0.45) * fontSize
  );
  setFontSize(s);
  shapeContext.clearRect(0, 0, shapeCanvas.width, shapeCanvas.height);
  shapeContext.fillText(l, shapeCanvas.width / 2, shapeCanvas.height / 2);
  return processCanvas();
}
