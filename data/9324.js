{
  var r = e.for,
    i = e.alias,
    o = e.iterator1 ? "," + e.iterator1 : "",
    a = e.iterator2 ? "," + e.iterator2 : "";
  return (
    (e.forProcessed = !0),
    "_l((" + r + "),function(" + i + o + a + "){return " + ti(t, e, n) + "})"
  );
}
