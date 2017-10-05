{
  const output = Babel.transform("const someDiv = <div>{getMessage()}</div>", {
    presets: ["react"]
  }).code;
  assert.equal(
    output,
    'const someDiv = React.createElement("div", null, getMessage());'
  );
}
