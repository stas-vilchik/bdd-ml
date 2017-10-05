{
  var ast = parse(template.trim(), options);
  optimize$1(ast, options);
  var code = generate$1(ast, options);
  return {
    ast: ast,
    render: code.render,
    staticRenderFns: code.staticRenderFns
  };
}
