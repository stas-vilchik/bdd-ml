{
  var e,
    n = t.options,
    r = t.extendOptions,
    o = t.sealedOptions;

  for (var i in n)
    n[i] !== o[i] && (e || (e = {}), (e[i] = be(n[i], r[i], o[i])));

  return e;
}
