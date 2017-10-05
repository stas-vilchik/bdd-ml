{
  const lolizer = () => ({
    visitor: {
      Identifier(path) {
        path.node.name = "LOL";
      }
    }
  });

  it("allows custom plugins to be registered", () => {
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
  });
  it("allows custom presets to be registered", () => {
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
  });
}
