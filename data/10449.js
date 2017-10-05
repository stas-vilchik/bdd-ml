{
  if (e) {
    if (((t._directInactive = !1), $t(t))) return;
  } else if (t._directInactive) return;

  if (t._inactive || null === t._inactive) {
    t._inactive = !1;

    for (var n = 0; n < t.$children.length; n++) xt(t.$children[n]);

    Ot(t, "activated");
  }
}
