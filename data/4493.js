{
  [1, "", null, undefined, {}, [], 0.2, 0, Infinity, -Infinity].forEach(v => {
    expect(() => jestExpect(v).toBeNaN()).toThrowErrorMatchingSnapshot();
    jestExpect(v).not.toBeNaN();
  });
}
