{
  let hasThrown = false;

  try {
    runtime.requireModule(runtime.__mockRootPath, "./throwing.js");
  } catch (err) {
    hasThrown = true;
    expect(err.stack).toMatch(/^Error: throwing\s+at Object.<anonymous>/);
  }

  expect(hasThrown).toBe(true);
}
