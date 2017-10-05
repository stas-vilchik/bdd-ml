{
  var i;
  if (
    (n.push(function() {
      if (t)
        try {
          t.call(o);
        } catch (t) {
          k(t, o, "nextTick");
        }
      else i && i(o);
    }),
    r || ((r = !0), e()),
    !t && "undefined" != typeof Promise)
  )
    return new Promise(function(t, e) {
      i = t;
    });
}
