{
  this.inflight += nodes.length;

  for (var i = 0, l = nodes.length, n; i < l && (n = nodes[i]); i++) {
    this.require(n);
  }

  this.checkDone();
}
