createRuntime(__filename).then(runtime => {
  const root = runtime.requireModule(runtime.__mockRootPath);
  const mock = root.jest.fn();
  expect(root.jest.isMockFunction(() => {})).toBe(false);
  expect(root.jest.isMockFunction(mock)).toBe(true);
});
