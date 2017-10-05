{
  var e,
    n = t.options,
    r = t.extendOptions,
    i = t.sealedOptions;

  for (var o in n)
    n[o] !== i[o] && (e || (e = {}), (e[o] = be(n[o], r[o], i[o])));

  return e;
}
