{
  return (
    (f = r.length),
    ys(p) ||
      "noscript" === p ||
      (n = n
        .replace(/<!--([\s\S]*?)-->/g, "$1")
        .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, "$1")),
    ws(p, n) && (n = n.slice(1)),
    e.chars && e.chars(n),
    ""
  );
}
