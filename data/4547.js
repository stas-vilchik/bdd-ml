{
  it(`'${stringify(list)}' does not contain a value equal to'${stringify(
    v
  )}'`, () => {
    jestExpect(list).not.toContainEqual(v);
    expect(() =>
      jestExpect(list).toContainEqual(v)
    ).toThrowErrorMatchingSnapshot();
  });
}
