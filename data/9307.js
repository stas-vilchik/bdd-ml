{
  if (!e) return "function(){}";
  if (Array.isArray(e))
    return (
      "[" +
      e
        .map(function(e) {
          return Hr(t, e);
        })
        .join(",") +
      "]"
    );
  var n = Ds.test(e.value),
    r = Is.test(e.value);

  if (e.modifiers) {
    var i = "",
      o = "",
      a = [];

    for (var s in e.modifiers)
      Rs[s] ? ((o += Rs[s]), Ps[s] && a.push(s)) : a.push(s);

    return (
      a.length && (i += Br(a)),
      o && (i += o),
      "function($event){" +
        i +
        (n ? e.value + "($event)" : r ? "(" + e.value + ")($event)" : e.value) +
        "}"
    );
  }

  return n || r ? e.value : "function($event){" + e.value + "}";
}
