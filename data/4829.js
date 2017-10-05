{
  fs.readFileSync.mockClear();
  mockChangedFiles = Object.create(null);
  mockClocks = object({
    "/fruits": "c:fake-clock:3",
    "/vegetables": "c:fake-clock:4"
  });
  const config = Object.assign({}, defaultConfig, {
    ignorePattern: /kiwi|pear/
  });
  return new HasteMap(config).build().then(({ moduleMap }) => {
    expect(moduleMap.getModule("Pear")).toBe(null);
  });
}
