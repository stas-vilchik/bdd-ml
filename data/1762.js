{
  var res = transform(code, {
    sourceMap: true,
    plugins: opts.plugins
  });
  assert.notEqual(
    res.map.mappings,
    "",
    "expected to generate sourcemap for: " + code
  );
}
