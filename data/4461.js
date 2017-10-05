{
  const obj = {};
  obj.circular = obj;
  expect(() => jestExpect(obj).toBe({})).toThrowErrorMatchingSnapshot();
}
