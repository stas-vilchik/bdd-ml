{
  var n = Cr(e.children);
  n &&
    n.if &&
    wr(n, {
      exp: t.elseif,
      block: t
    });
}
