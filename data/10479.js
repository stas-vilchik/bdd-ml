{
  if (!t(r)) {
    var u = a.$options._base;

    if ((i(r) && (r = u.extend(r)), "function" == typeof r)) {
      var l;
      if (t(r.cid) && ((l = r), void 0 === (r = ft(l, u, a))))
        return lt(l, o, a, s, c);
      (o = o || {}), _e(r), e(o.model) && ne(r.options, o);
      var f = rt(o, r, c);
      if (n(r.options.functional)) return Zt(r, f, o, a, s);
      var p = o.on;

      if (((o.on = o.nativeOn), n(r.options.abstract))) {
        var d = o.slot;
        (o = {}), d && (o.slot = d);
      }

      te(o);
      var v = r.options.name || c;
      return new Dr(
        "vue-component-" + r.cid + (v ? "-" + v : ""),
        o,
        void 0,
        void 0,
        void 0,
        a,
        {
          Ctor: r,
          propsData: f,
          listeners: p,
          tag: c,
          children: s
        },
        l
      );
    }
  }
}
