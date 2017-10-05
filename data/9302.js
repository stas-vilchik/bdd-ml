{
  if (((t.static = Pr(t)), 1 === t.type)) {
    if (!ms(t.tag) && "slot" !== t.tag && null == t.attrsMap["inline-template"])
      return;

    for (var e = 0, n = t.children.length; e < n; e++) {
      var r = t.children[e];
      Ir(r), r.static || (t.static = !1);
    }

    if (t.ifConditions)
      for (var i = 1, o = t.ifConditions.length; i < o; i++) {
        var a = t.ifConditions[i].block;
        Ir(a), a.static || (t.static = !1);
      }
  }
}
