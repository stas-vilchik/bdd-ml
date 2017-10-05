{
  var o = r.elm,
    i = r.data,
    a = n.data;

  if (
    !(
      t(i.staticClass) &&
      t(i.class) &&
      (t(a) || (t(a.staticClass) && t(a.class)))
    )
  ) {
    var s = Ie(r),
      c = o._transitionClasses;
    e(c) && (s = Pe(s, Me(c))),
      s !== o._prevClass && (o.setAttribute("class", s), (o._prevClass = s));
  }
}
