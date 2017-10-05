{
  this.p = new S.Point({
    x: x,
    y: y,
    z: 5,
    a: 1,
    h: 0
  });
  this.e = 0.07;
  this.s = true;
  this.c = new S.Color(255, 255, 255, this.p.a);
  this.t = this.clone();
  this.q = [];
}
