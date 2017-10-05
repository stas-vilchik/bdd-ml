{
  if ((t = t && He(t)) === document.body || t === document.documentElement)
    return this;
  var n = this.$options;

  if (!n.render) {
    var r = n.template;
    if (r) {
      if ("string" == typeof r) "#" === r.charAt(0) && (r = Vs(r));
      else {
        if (!r.nodeType) return this;
        r = r.innerHTML;
      }
    } else t && (r = vi(t));

    if (r) {
      var i = Us(
          r,
          {
            shouldDecodeNewlines: Ha,
            delimiters: n.delimiters,
            comments: n.comments
          },
          this
        ),
        o = i.render,
        a = i.staticRenderFns;
      (n.render = o), (n.staticRenderFns = a);
    }
  }

  return zs.call(this, t, e);
}
