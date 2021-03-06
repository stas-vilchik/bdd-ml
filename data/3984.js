{
  let size;
  let a = S.Drawing.getArea();
  let d = 0;
  let i = 0;
  width = n.w;
  height = n.h;
  compensate();

  if (n.dots.length > dots.length) {
    size = n.dots.length - dots.length;

    for (d = 1; d <= size; d++) {
      dots.push(new S.Dot(a.w / 2, a.h / 2));
    }
  }

  d = 0;

  while (n.dots.length > 0) {
    i = Math.floor(Math.random() * n.dots.length);
    dots[d].e = fast ? 0.25 : dots[d].s ? 0.14 : 0.11;

    if (dots[d].s) {
      dots[d].move(
        new S.Point({
          z: Math.random() * 20 + 10,
          a: Math.random(),
          h: 18
        })
      );
    } else {
      dots[d].move(
        new S.Point({
          z: Math.random() * 5 + 5,
          h: fast ? 18 : 30
        })
      );
    }

    dots[d].s = true;
    dots[d].move(
      new S.Point({
        x: n.dots[i].x + cx,
        y: n.dots[i].y + cy,
        a: 1,
        z: 5,
        h: 0
      })
    );
    n.dots = n.dots.slice(0, i).concat(n.dots.slice(i + 1));
    d++;
  }

  for (i = d; i < dots.length; i++) {
    if (dots[i].s) {
      dots[i].move(
        new S.Point({
          z: Math.random() * 20 + 10,
          a: Math.random(),
          h: 20
        })
      );
      dots[i].s = false;
      dots[i].e = 0.04;
      dots[i].move(
        new S.Point({
          x: Math.random() * a.w,
          y: Math.random() * a.h,
          a: 0.3,
          z: Math.random() * 4,
          h: 0
        })
      );
    }
  }
}
