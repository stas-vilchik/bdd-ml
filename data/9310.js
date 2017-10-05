{
  var n = new Bs(e);
  return {
    render: "with(this){return " + (t ? zr(t, n) : '_c("div")') + "}",
    staticRenderFns: n.staticRenderFns
  };
}
