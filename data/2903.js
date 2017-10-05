{
  const output = Babel.transform("var a: string;", {
    presets: ["typescript"]
  }).code;
  assert.equal(output, "var a;");
}
