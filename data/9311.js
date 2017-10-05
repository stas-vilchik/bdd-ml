{
  if (t.staticRoot && !t.staticProcessed) return Kr(t, e);
  if (t.once && !t.onceProcessed) return Jr(t, e);
  if (t.for && !t.forProcessed) return Gr(t, e);
  if (t.if && !t.ifProcessed) return qr(t, e);

  if ("template" !== t.tag || t.slotTarget) {
    if ("slot" === t.tag) return ci(t, e);
    var n;
    if (t.component) n = ui(t.component, t, e);
    else {
      var r = t.plain ? void 0 : Zr(t, e),
        i = t.inlineTemplate ? null : ni(t, e, !0);
      n = "_c('" + t.tag + "'" + (r ? "," + r : "") + (i ? "," + i : "") + ")";
    }

    for (var o = 0; o < e.transforms.length; o++) n = e.transforms[o](t, n);

    return n;
  }

  return ni(t, e) || "void 0";
}
