{
  test(`${called} works with jest.fn`, () => {
    const fn = jest.fn();
    jestExpect(fn).not[called]();
    expect(() => jestExpect(fn)[called]()).toThrowErrorMatchingSnapshot();
    fn();
    jestExpect(fn)[called]();
    expect(() => jestExpect(fn).not[called]()).toThrowErrorMatchingSnapshot();
    expect(() => jestExpect(fn)[called](555)).toThrowErrorMatchingSnapshot();
  });
}
