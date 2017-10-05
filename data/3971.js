{
  let pixels = shapeContext.getImageData(
    0,
    0,
    shapeCanvas.width,
    shapeCanvas.height
  ).data;
  let dots = [];
  let x = 0;
  let y = 0;
  let fx = shapeCanvas.width;
  let fy = shapeCanvas.height;
  let w = 0;
  let h = 0;

  for (let p = 0; p < pixels.length; p += 4 * gap) {
    if (pixels[p + 3] > 0) {
      dots.push(
        new S.Point({
          x: x,
          y: y
        })
      );
      w = x > w ? x : w;
      h = y > h ? y : h;
      fx = x < fx ? x : fx;
      fy = y < fy ? y : fy;
    }

    x += gap;

    if (x >= shapeCanvas.width) {
      x = 0;
      y += gap;
      p += gap * 4 * shapeCanvas.width;
    }
  }

  return {
    dots: dots,
    w: w + fx,
    h: h + fy
  };
}
