{
  const output = Babel.transform('const getMessage = () => "Hello World"', {
    presets: ["es2015-no-commonjs"]
  }).code;
  assert.equal(
    output,
    "var getMessage = function getMessage() {\n" +
      '  return "Hello World";\n' +
      "};"
  );
}
