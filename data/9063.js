{
  function e() {
    var t = arguments,
      n = e.fns;
    if (!Array.isArray(n)) return n.apply(null, arguments);

    for (var r = n.slice(), i = 0; i < r.length; i++) r[i].apply(null, t);
  }

  return (e.fns = t), e;
}
