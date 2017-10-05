{
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
}
