{
  canvas = el;
  context = canvas.getContext("2d");
  this.adjustCanvas();
  window.addEventListener("resize", function() {
    S.Drawing.adjustCanvas();
  });
}
