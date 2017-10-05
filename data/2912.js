{
  assert.throws(
    () =>
      Babel.transform("var foo", {
        plugins: ["lolfail"]
      }),
    /Invalid plugin specified in Babel options: "lolfail"/
  );
}
