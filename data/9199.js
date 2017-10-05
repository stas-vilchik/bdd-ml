{
  r && r.capture && (delete r.capture, (e = "!" + e)),
    r && r.once && (delete r.once, (e = "~" + e)),
    r && r.passive && (delete r.passive, (e = "&" + e));
  var a;
  r && r.native
    ? (delete r.native, (a = t.nativeEvents || (t.nativeEvents = {})))
    : (a = t.events || (t.events = {}));
  var s = {
      value: n,
      modifiers: r
    },
    c = a[e];
  Array.isArray(c)
    ? i ? c.unshift(s) : c.push(s)
    : (a[e] = c ? (i ? [s, c] : [c, s]) : s);
}
