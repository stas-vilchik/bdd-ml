{
  const output = Babel.transform('const getMessage = () => "Hello World"', {
    plugins: ["transform-es2015-arrow-functions"]
  }).code;
  assert.equal(
    output,
    "const getMessage = function () {\n" + '  return "Hello World";\n' + "};"
  );
}
