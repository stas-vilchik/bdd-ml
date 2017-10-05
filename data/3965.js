{
  let p;
  let d;

  if (this._moveTowards(this.t)) {
    p = this.q.shift();

    if (p) {
      this.t.x = p.x || this.p.x;
      this.t.y = p.y || this.p.y;
      this.t.z = p.z || this.p.z;
      this.t.a = p.a || this.p.a;
      this.p.h = p.h || 0;
    } else {
      if (this.s) {
        this.p.x -= Math.sin(Math.random() * 3.142);
        this.p.y -= Math.sin(Math.random() * 3.142);
      } else {
        this.move(
          new S.Point({
            x: this.p.x + Math.random() * 50 - 25,
            y: this.p.y + Math.random() * 50 - 25
          })
        );
      }
    }
  }

  d = this.p.a - this.t.a;
  this.p.a = Math.max(0.1, this.p.a - d * 0.05);
  d = this.p.z - this.t.z;
  this.p.z = Math.max(1, this.p.z - d * 0.05);
}
