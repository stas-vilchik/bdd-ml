{
  var o;
  if (
    (n.push(function() {
      if (t)
        try {
          t.call(i);
        } catch (t) {
          k(t, i, "nextTick");
        }
      else o && o(i);
    }),
    r || ((r = !0), e()),
    !t && "undefined" != typeof Promise)
  )
    return new Promise(function(t, e) {
      o = t;
    });
}
