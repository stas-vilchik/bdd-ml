{
  const mockFunctionArity1 = moduleMocker.fn(x => x);
  const mockFunctionArity2 = moduleMocker.fn((x, y) => y);
  expect(mockFunctionArity1.length).toBe(1);
  expect(mockFunctionArity2.length).toBe(2);
}
