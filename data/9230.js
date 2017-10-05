{
  if (t) {
    if ("object" == typeof t) {
      var e = {};
      return !1 !== t.css && y(e, wa(t.name || "v")), y(e, t), e;
    }

    return "string" == typeof t ? wa(t) : void 0;
  }
}
