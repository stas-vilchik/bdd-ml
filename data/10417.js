{
  var t = arguments,
    n = e.fns;
  if (!Array.isArray(n)) return n.apply(null, arguments);

  for (var r = n.slice(), o = 0; o < r.length; o++) r[o].apply(null, t);
}
