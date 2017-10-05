{
  function t() {
    r = !1;
    var t = n.slice(0);
    n.length = 0;

    for (var e = 0; e < t.length; e++) t[e]();
  }

  var e,
    n = [],
    r = !1;

  if ("undefined" != typeof Promise && O(Promise)) {
    var i = Promise.resolve(),
      o = function(t) {
        console.error(t);
      };

    e = function() {
      i.then(t).catch(o), Hi && setTimeout(_);
    };
  } else if (
    Di ||
    "undefined" == typeof MutationObserver ||
    (!O(MutationObserver) &&
      "[object MutationObserverConstructor]" !== MutationObserver.toString())
  )
    e = function() {
      setTimeout(t, 0);
    };
  else {
    var a = 1,
      s = new MutationObserver(t),
      c = document.createTextNode(String(a));
    s.observe(c, {
      characterData: !0
    }),
      (e = function() {
        (a = (a + 1) % 2), (c.data = String(a));
      });
  }

  return function(t, i) {
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
  };
}
