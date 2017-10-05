{
  for (; t.length < e.length; ) t = t.concat(t);

  return Math.max.apply(
    null,
    e.map(function(e, n) {
      return bn(e) + bn(t[n]);
    })
  );
}
