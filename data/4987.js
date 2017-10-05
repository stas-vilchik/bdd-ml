{
  const mockFn = moduleMocker.fn();
  expect(moduleMocker.isMockFunction(() => {})).toBe(false);
  expect(moduleMocker.isMockFunction(mockFn)).toBe(true);
}
