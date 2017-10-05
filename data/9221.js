{
  var r = t.value,
    i = t._vModifiers;
  return e(i) && i.number
    ? l(r) !== l(n)
    : e(i) && i.trim ? r.trim() !== n.trim() : r !== n;
}
