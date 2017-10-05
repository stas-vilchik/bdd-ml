{
  for (var t = this, e = this.deps.length; e--; ) t.deps[e].depend();
}
