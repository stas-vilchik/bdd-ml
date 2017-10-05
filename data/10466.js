{
  var r = !gr();
  "function" == typeof n
    ? ((Gr.get = r ? Ht(e) : n), (Gr.set = g))
    : ((Gr.get = n.get ? (r && !1 !== n.cache ? Ht(e) : n.get) : g),
      (Gr.set = n.set ? n.set : g)),
    Object.defineProperty(t, e, Gr);
}
