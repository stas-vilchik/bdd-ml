{
  var e = t.id;
  this.newDepIds.has(e) ||
    (this.newDepIds.add(e),
    this.newDeps.push(t),
    this.depIds.has(e) || t.addSub(this));
}
