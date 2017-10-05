{
  const root = runtime.requireModule(runtime.__mockRootPath);
  const mock = root.jest.fn(string => string + " implementation");
  expect(mock._isMockFunction).toBe(true);
  const value = mock("mock");
  expect(value).toEqual("mock implementation");
  expect(mock).toBeCalled();
}
