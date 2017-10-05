createRuntime(__filename).then(runtime => {
  const root = runtime.requireModule(runtime.__mockRootPath);
  const mock = root.jest.fn();
  expect(mock._isMockFunction).toBe(true);
  mock();
  expect(mock).toBeCalled();
});
