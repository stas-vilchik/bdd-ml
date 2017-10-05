{
  test(`'${stringify(v)}' is truthy`, () => {
    jestExpect(v).toBeTruthy();
    jestExpect(v).not.toBeFalsy();
    expect(() => jestExpect(v).not.toBeTruthy()).toThrowErrorMatchingSnapshot();
    expect(() => jestExpect(v).toBeFalsy()).toThrowErrorMatchingSnapshot();
  });
}
