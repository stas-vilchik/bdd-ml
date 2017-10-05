{
  var e = this,
    n = this.$options._renderChildren;

  if (
    n &&
    (n = n.filter(function(t) {
      return t.tag || pt(t);
    })).length
  ) {
    var r = this.mode,
      o = n[0];
    if (ar(this.$vnode)) return o;
    var a = rr(o);
    if (!a) return o;
    if (this._leaving) return or(t, o);
    var s = "__transition-" + this._uid + "-";
    a.key =
      null == a.key
        ? a.isComment ? s + "comment" : s + a.tag
        : i(a.key)
          ? 0 === String(a.key).indexOf(s) ? a.key : s + a.key
          : a.key;
    var c = ((a.data || (a.data = {})).transition = ir(this)),
      u = this._vnode,
      l = rr(u);

    if (
      (a.data.directives &&
        a.data.directives.some(function(t) {
          return "show" === t.name;
        }) &&
        (a.data.show = !0),
      l && l.data && !sr(a, l) && !pt(l))
    ) {
      var f = l && (l.data.transition = y({}, c));
      if ("out-in" === r)
        return (
          (this._leaving = !0),
          nt(f, "afterLeave", function() {
            (e._leaving = !1), e.$forceUpdate();
          }),
          or(t, o)
        );

      if ("in-out" === r) {
        if (pt(a)) return u;

        var p,
          d = function() {
            p();
          };

        nt(c, "afterEnter", d),
          nt(c, "enterCancelled", d),
          nt(f, "delayLeave", function(t) {
            p = t;
          });
      }
    }

    return o;
  }
}
