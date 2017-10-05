{
  it(
    `throws if non String/RegExp expected value passed:` +
      ` [${stringify(n1)}, ${stringify(n2)}]`,
    () => {
      expect(() => jestExpect(n1).toMatch(n2)).toThrowErrorMatchingSnapshot();
    }
  );
}
