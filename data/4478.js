{
  expect(() => jestExpect({}).toBeInstanceOf(4)).toThrowErrorMatchingSnapshot();
}
