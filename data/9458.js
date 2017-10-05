{
  for (
    var e = this.tag || this.$vnode.data.tag || "span",
      n = Object.create(null),
      r = (this.prevChildren = this.children),
      i = this.$slots.default || [],
      o = (this.children = []),
      a = ir(this),
      s = 0;
    s < i.length;
    s++
  ) {
    var c = i[s];
    c.tag &&
      null != c.key &&
      0 !== String(c.key).indexOf("__vlist") &&
      (o.push(c), (n[c.key] = c), ((c.data || (c.data = {})).transition = a));
  }

  if (r) {
    for (var u = [], l = [], f = 0; f < r.length; f++) {
      var p = r[f];
      (p.data.transition = a),
        (p.data.pos = p.elm.getBoundingClientRect()),
        n[p.key] ? u.push(p) : l.push(p);
    }

    (this.kept = t(e, null, u)), (this.removed = l);
  }

  return t(e, null, o);
}
