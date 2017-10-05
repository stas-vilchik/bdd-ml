{
  return e.for && !e.forProcessed
    ? ei(t, e, n)
    : "{key:" +
        t +
        ",fn:function(" +
        String(e.attrsMap.scope) +
        "){return " +
        ("template" === e.tag ? ni(e, n) || "void 0" : zr(e, n)) +
        "}}";
}
