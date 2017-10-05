{
  var e = s ? s.call(t) : n;
  return (
    Qi.target && (o.depend(), u && (u.dep.depend(), Array.isArray(e) && D(e))),
    e
  );
}
