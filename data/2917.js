{
  Babel.registerPreset("lulz", {
    plugins: [lolizer]
  });
  const output = Babel.transform("function helloWorld() { alert(hello); }", {
    presets: ["lulz"]
  });
  assert.equal(
    output.code,
    `function LOL() {
  LOL(LOL);
}`
  );
}
