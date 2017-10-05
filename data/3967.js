{
  if (!avoidStatic || (avoidStatic && this.distanceTo(p) > 1)) {
    this.q.push(p);
  }
}
