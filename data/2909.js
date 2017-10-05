{
  const output = Babel.transform("`${x}`", {
    plugins: [
      [
        "transform-es2015-template-literals",
        {
          loose: true
        }
      ]
    ]
  }).code;
  assert.equal(output, '"" + x;');
}
