{
  const ast = {
    type: "Program",
    start: 0,
    end: 2,
    directives: [],
    body: [
      {
        type: "ExpressionStatement",
        start: 0,
        end: 1,
        expression: {
          type: "NumericLiteral",
          start: 0,
          end: 2,
          value: 42,
          raw: "42"
        }
      }
    ],
    sourceType: "module"
  };
  const output = Babel.transformFromAst(ast, "42", {
    presets: ["es2015"]
  }).code;
  assert.equal(output, "42;");
}
