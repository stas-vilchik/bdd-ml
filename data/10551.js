{
  var r = t.value,
    o = t._vModifiers;
  return e(o) && o.number
    ? l(r) !== l(n)
    : e(o) && o.trim ? r.trim() !== n.trim() : r !== n;
}
