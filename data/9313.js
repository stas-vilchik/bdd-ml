{
  if (((t.onceProcessed = !0), t.if && !t.ifProcessed)) return qr(t, e);

  if (t.staticInFor) {
    for (var n = "", r = t.parent; r; ) {
      if (r.for) {
        n = r.key;
        break;
      }

      r = r.parent;
    }

    return n ? "_o(" + zr(t, e) + "," + e.onceId++ + "," + n + ")" : zr(t, e);
  }

  return Kr(t, e);
}
