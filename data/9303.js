{
  if (1 === t.type) {
    if (
      ((t.static || t.once) && (t.staticInFor = e),
      t.static &&
        t.children.length &&
        (1 !== t.children.length || 3 !== t.children[0].type))
    )
      return void (t.staticRoot = !0);
    if (((t.staticRoot = !1), t.children))
      for (var n = 0, r = t.children.length; n < r; n++)
        Dr(t.children[n], e || !!t.for);
    if (t.ifConditions)
      for (var i = 1, o = t.ifConditions.length; i < o; i++)
        Dr(t.ifConditions[i].block, e);
  }
}
