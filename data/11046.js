{
  var state = new CodegenState(options);
  var code = ast ? genSSRElement(ast, state) : '_c("div")';
  return {
    render: "with(this){return " + code + "}",
    staticRenderFns: state.staticRenderFns
  };
}
