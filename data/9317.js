{
  var i = t.for,
    o = t.alias,
    a = t.iterator1 ? "," + t.iterator1 : "",
    s = t.iterator2 ? "," + t.iterator2 : "";
  return (
    (t.forProcessed = !0),
    (r || "_l") +
      "((" +
      i +
      "),function(" +
      o +
      a +
      s +
      "){return " +
      (n || zr)(t, e) +
      "})"
  );
}
