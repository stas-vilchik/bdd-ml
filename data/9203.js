{
  var n = pn(t);
  return null === n.idx
    ? t + "=" + e
    : "$set(" + n.exp + ", " + n.idx + ", " + e + ")";
}
