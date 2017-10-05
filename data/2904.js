{
  const output = Babel.transform("var a: string;", {
    presets: ["flow"]
  }).code;
  assert.equal(output, "var a;");
}
