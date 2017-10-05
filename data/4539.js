{
  it(`'${stringify(list)}' does not contain '${stringify(v)}'`, () => {
    jestExpect(list).not.toContain(v);
    expect(() => jestExpect(list).toContain(v)).toThrowErrorMatchingSnapshot();
  });
}
