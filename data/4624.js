{
  test(`${calledWith} works only on spies or jest.fn`, () => {
    const fn = function fn() {};

    expect(() => jestExpect(fn)[calledWith]()).toThrowErrorMatchingSnapshot();
  });
}
