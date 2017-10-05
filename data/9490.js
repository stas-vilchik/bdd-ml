{
  var n = vr(t.trim(), e);
  Mr(n, e);
  var r = Vr(n, e);
  return {
    ast: n,
    render: r.render,
    staticRenderFns: r.staticRenderFns
  };
}
