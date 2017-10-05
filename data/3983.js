{
  let a = S.Drawing.getArea();

  for (let d = 0; d < dots.length; d++) {
    if (!dots[d].s) {
      dots[d].move({
        x: Math.random() * a.w,
        y: Math.random() * a.h
      });
    }
  }
}
