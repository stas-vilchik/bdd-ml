{
  let details = this.distanceTo(n, true);
  let dx = details[0];
  let dy = details[1];
  let d = details[2];
  let e = this.e * d;

  if (this.p.h === -1) {
    this.p.x = n.x;
    this.p.y = n.y;
    return true;
  }

  if (d > 1) {
    this.p.x -= dx / d * e;
    this.p.y -= dy / d * e;
  } else {
    if (this.p.h > 0) {
      this.p.h--;
    } else {
      return true;
    }
  }

  return false;
}
