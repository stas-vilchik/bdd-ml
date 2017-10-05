{
  let dots = [];
  let width = gap * w;
  let height = gap * h;

  for (let y = 0; y < height; y += gap) {
    for (let x = 0; x < width; x += gap) {
      dots.push(
        new S.Point({
          x: x,
          y: y
        })
      );
    }
  }

  return {
    dots: dots,
    w: width,
    h: height
  };
}
