{
  if (!((e && ((t._directInactive = !0), $t(t))) || t._inactive)) {
    t._inactive = !0;

    for (var n = 0; n < t.$children.length; n++) kt(t.$children[n]);

    Ot(t, "deactivated");
  }
}
