{
  var r = un(t, ":" + e) || un(t, "v-bind:" + e);
  if (null != r) return Xe(r);

  if (!1 !== n) {
    var i = un(t, e);
    if (null != i) return JSON.stringify(i);
  }
}
