{
  var r = s ? s.call(t) : n;
  e === r ||
    (e !== e && r !== r) ||
    (c ? c.call(t, e) : (n = e), (u = !o && I(e)), i.notify());
}
