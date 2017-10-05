{
  assert.throws(
    () =>
      Babel.transform("var foo", {
        presets: ["lolfail"]
      }),
    /Invalid preset specified in Babel options: "lolfail"/
  );
}
