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
      i = n[0];
    if (Nn(this.$vnode)) return i;
    var a = Ln(i);
    if (!a) return i;
    if (this._leaving) return Mn(t, i);
    var s = "__transition-" + this._uid + "-";
    a.key =
      null == a.key
        ? a.isComment ? s + "comment" : s + a.tag
        : o(a.key)
          ? 0 === String(a.key).indexOf(s) ? a.key : s + a.key
          : a.key;
    var c = ((a.data || (a.data = {})).transition = Pn(this)),
      u = this._vnode,
      l = Ln(u);

    if (
      (a.data.directives &&
        a.data.directives.some(function(t) {
          return "show" === t.name;
        }) &&
        (a.data.show = !0),
      l && l.data && !Fn(a, l) && !pt(l))
    ) {
      var f = l && (l.data.transition = y({}, c));
      if ("out-in" === r)
        return (
          (this._leaving = !0),
          nt(f, "afterLeave", function() {
            (e._leaving = !1), e.$forceUpdate();
          }),
          Mn(t, i)
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

    return i;
  }
}
