{
  const output = Babel.transform("export let x", {
    presets: [
      [
        "es2015",
        {
          modules: false
        }
      ]
    ]
  }).code;
  assert.equal(output, "export var x;");
}
