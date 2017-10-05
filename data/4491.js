{
  [NaN, Math.sqrt(-1), Infinity - Infinity, 0 / 0].forEach(v => {
    jestExpect(v).toBeNaN();
    expect(() => jestExpect(v).not.toBeNaN()).toThrowErrorMatchingSnapshot();
  });
}
