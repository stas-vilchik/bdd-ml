{
  var n = t.$options.propsData || {},
    r = (t._props = {}),
    i = (t.$options._propKeys = []),
    o = !t.$parent;
  ro.shouldConvert = o;

  for (var a in e)
    !(function(o) {
      i.push(o);
      var a = J(o, e, n, t);
      N(r, o, a), o in t || Dt(t, "_props", o);
    })(a);

  ro.shouldConvert = !0;
}
