{
  for (
    var t, r, i = String(e), s = "", u = 0, a = o;
    i.charAt(0 | u) || ((a = "="), u % 1);
    s += a.charAt(63 & (t >> (8 - (u % 1) * 8)))
  ) {
    if (((r = i.charCodeAt((u += 0.75))), r > 255)) throw new n();
    t = (t << 8) | r;
  }

  return s;
}
