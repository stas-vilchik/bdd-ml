{
  if (t) {
    if ("object" == typeof t) {
      var e = {};
      return !1 !== t.css && y(e, Uo(t.name || "v")), y(e, t), e;
    }

    return "string" == typeof t ? Uo(t) : void 0;
  }
}
