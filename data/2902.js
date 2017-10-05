{
  const output = Babel.transform("class A {}", {
    presets: ["es2015-loose"]
  }).code;
  assert.equal(output, "var A = function A() {};");
}
