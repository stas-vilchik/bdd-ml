{
  var i = r.elm,
    o = r.data,
    a = n.data;

  if (
    !(
      t(o.staticClass) &&
      t(o.class) &&
      (t(a) || (t(a.staticClass) && t(a.class)))
    )
  ) {
    var s = Le(r),
      c = i._transitionClasses;
    e(c) && (s = Ie(s, De(c))),
      s !== i._prevClass && (i.setAttribute("class", s), (i._prevClass = s));
  }
}
