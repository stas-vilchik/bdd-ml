{
  var o = t.children;

  if (o.length) {
    var a = o[0];
    if (1 === o.length && a.for && "template" !== a.tag && "slot" !== a.tag)
      return (r || zr)(a, e);
    var s = n ? ri(o, e.maybeComponent) : 0,
      c = i || oi;
    return (
      "[" +
      o
        .map(function(t) {
          return c(t, e);
        })
        .join(",") +
      "]" +
      (s ? "," + s : "")
    );
  }
}
