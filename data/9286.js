{
  var e;

  if ((e = un(t, "v-for"))) {
    var n = e.match(ks);
    if (!n) return;
    t.for = n[2].trim();
    var r = n[1].trim(),
      i = r.match(Os);
    i
      ? ((t.alias = i[1].trim()),
        (t.iterator1 = i[2].trim()),
        i[3] && (t.iterator2 = i[3].trim()))
      : (t.alias = r);
  }
}
