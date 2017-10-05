{
  const id =
    modules === "commonjs"
      ? t.memberExpression(t.identifier("module"), t.identifier("exports"))
      : null;
  const sourceType = modules === "commonjs" ? "script" : "module";
  const tree = t.program(helpers.get(helperName, id).nodes, [], sourceType);
  const transformOpts = makeTransformOpts(modules, useBuiltIns);
  const relative = useBuiltIns ? "../.." : "..";
  return babel.transformFromAst(tree, null, {
    presets: transformOpts.presets,
    plugins: transformOpts.plugins.concat([
      buildRuntimeRewritePlugin(
        modules === false ? `../${relative}` : relative,
        helperName
      )
    ])
  }).code;
}
