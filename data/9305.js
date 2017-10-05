{
  for (; t.parent; ) {
    if ("template" !== (t = t.parent).tag) return !1;
    if (t.for) return !0;
  }

  return !1;
}
