{
  for (; r <= i; ++r) {
    var o = n[r];
    e(o) && (e(o.tag) ? ($(o), _(o)) : s(o.elm));
  }
}
