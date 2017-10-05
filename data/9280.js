{
  if (i && (!Di || "textarea" !== i.tag || i.attrsMap.placeholder !== t)) {
    var e = i.children;

    if ((t = c || t.trim() ? (jr(i) ? t : js(t)) : a && e.length ? " " : "")) {
      var n;
      !s && " " !== t && (n = fr(t, cs))
        ? e.push({
            type: 2,
            expression: n,
            text: t
          })
        : (" " === t && e.length && " " === e[e.length - 1].text) ||
          e.push({
            type: 3,
            text: t
          });
    }
  }
}
