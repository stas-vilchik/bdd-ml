{
  expect(() =>
    jestExpect({
      a: 9
    }).toHaveLength(1)
  ).toThrowErrorMatchingSnapshot();
  expect(() => jestExpect(0).toHaveLength(1)).toThrowErrorMatchingSnapshot();
  expect(() =>
    jestExpect(undefined).toHaveLength(1)
  ).toThrowErrorMatchingSnapshot();
}
