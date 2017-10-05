{
  let dx = this.p.x - n.x;
  let dy = this.p.y - n.y;
  let d = Math.sqrt(dx * dx + dy * dy);
  return details ? [dx, dy, d] : d;
}
