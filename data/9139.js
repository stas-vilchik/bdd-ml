{
  if (n)
    if (o(n)) {
      Array.isArray(n) && (n = g(n));
      var a;

      for (var s in n)
        !(function(o) {
          if ("class" === o || "style" === o || yi(o)) a = t;
          else {
            var s = t.attrs && t.attrs.type;
            a =
              r || Si.mustUseProp(e, s, o)
                ? t.domProps || (t.domProps = {})
                : t.attrs || (t.attrs = {});
          }
          o in a ||
            ((a[o] = n[o]),
            i &&
              ((t.on || (t.on = {}))["update:" + o] = function(t) {
                n[o] = t;
              }));
        })(s);
    } else;
  return t;
}
