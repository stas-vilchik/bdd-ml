{
  if (!t(r)) {
    var u = a.$options._base;

    if ((o(r) && (r = u.extend(r)), "function" == typeof r)) {
      var l;
      if (t(r.cid) && ((l = r), void 0 === (r = ft(l, u, a))))
        return lt(l, i, a, s, c);
      (i = i || {}), ge(r), e(i.model) && ne(r.options, i);
      var f = rt(i, r, c);
      if (n(r.options.functional)) return Zt(r, f, i, a, s);
      var p = i.on;

      if (((i.on = i.nativeOn), n(r.options.abstract))) {
        var d = i.slot;
        (i = {}), d && (i.slot = d);
      }

      te(i);
      var v = r.options.name || c;
      return new so(
        "vue-component-" + r.cid + (v ? "-" + v : ""),
        i,
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
