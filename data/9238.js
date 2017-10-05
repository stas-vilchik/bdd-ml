{
  for (; t.length < e.length; ) t = t.concat(t);

  return Math.max.apply(
    null,
    e.map(function(e, n) {
      return Vn(e) + Vn(t[n]);
    })
  );
}
