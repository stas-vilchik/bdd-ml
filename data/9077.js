{
  if (n(r.error) && e(r.errorComp)) return r.errorComp;
  if (e(r.resolved)) return r.resolved;
  if (n(r.loading) && e(r.loadingComp)) return r.loadingComp;

  if (!e(r.contexts)) {
    var s = (r.contexts = [a]),
      c = !0,
      u = function() {
        for (var t = 0, e = s.length; t < e; t++) s[t].$forceUpdate();
      },
      l = C(function(t) {
        (r.resolved = ut(t, i)), c || u();
      }),
      f = C(function(t) {
        e(r.errorComp) && ((r.error = !0), u());
      }),
      p = r(l, f);

    return (
      o(p) &&
        ("function" == typeof p.then
          ? t(r.resolved) && p.then(l, f)
          : e(p.component) &&
            "function" == typeof p.component.then &&
            (p.component.then(l, f),
            e(p.error) && (r.errorComp = ut(p.error, i)),
            e(p.loading) &&
              ((r.loadingComp = ut(p.loading, i)),
              0 === p.delay
                ? (r.loading = !0)
                : setTimeout(function() {
                    t(r.resolved) && t(r.error) && ((r.loading = !0), u());
                  }, p.delay || 200)),
            e(p.timeout) &&
              setTimeout(function() {
                t(r.resolved) && f(null);
              }, p.timeout))),
      (c = !1),
      r.loading ? r.loadingComp : r.resolved
    );
  }

  r.contexts.push(a);
}
