{
  if (
    ((No = t),
    (Lo = No.length),
    (Io = Do = Po = 0),
    t.indexOf("[") < 0 || t.lastIndexOf("]") < Lo - 1)
  )
    return {
      exp: t,
      idx: null
    };

  for (; !vn(); ) hn((Mo = dn())) ? yn(Mo) : 91 === Mo && mn(Mo);

  return {
    exp: t.substring(0, Do),
    idx: t.substring(Do + 1, Po)
  };
}
