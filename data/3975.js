{
  let image = new Image();
  let a = S.Drawing.getArea();

  image.onload = function() {
    shapeContext.clearRect(0, 0, shapeCanvas.width, shapeCanvas.height);
    shapeContext.drawImage(this, 0, 0, a.h * 0.6, a.h * 0.6);
    callback(processCanvas());
  };

  image.onerror = function() {
    callback(S.ShapeBuilder.letter("What?"));
  };

  image.src = url;
}
