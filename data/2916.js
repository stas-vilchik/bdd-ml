{
  Babel.registerPlugin("lolizer", lolizer);
  const output = Babel.transform("function helloWorld() { alert(hello); }", {
    plugins: ["lolizer"]
  });
  assert.equal(
    output.code,
    `function LOL() {
  LOL(LOL);
}`
  );
}
