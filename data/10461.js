{
  var n = t.$options.propsData || {},
    r = (t._props = {}),
    o = (t.$options._propKeys = []),
    i = !t.$parent;
  Er.shouldConvert = i;

  for (var a in e)
    !(function(i) {
      o.push(i);
      var a = q(i, e, n, t);
      D(r, i, a), i in t || Mt(t, "_props", i);
    })(a);

  Er.shouldConvert = !0;
}
