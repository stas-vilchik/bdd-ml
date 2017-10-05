{
  for (; t && (t = t.$parent); ) if (t._inactive) return !0;

  return !1;
}
