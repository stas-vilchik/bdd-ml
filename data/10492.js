{
  if (n)
    if (i(n)) {
      Array.isArray(n) && (n = _(n));
      var a;

      for (var s in n)
        !(function(i) {
          if ("class" === i || "style" === i || Hn(i)) a = t;
          else {
            var s = t.attrs && t.attrs.type;
            a =
              r || er.mustUseProp(e, s, i)
                ? t.domProps || (t.domProps = {})
                : t.attrs || (t.attrs = {});
          }
          i in a ||
            ((a[i] = n[i]),
            o &&
              ((t.on || (t.on = {}))["update:" + i] = function(t) {
                n[i] = t;
              }));
        })(s);
    } else;
  return t;
}
