{
  it(`'${stringify(list)}' contains a value equal to '${stringify(v)}'`, () => {
    jestExpect(list).toContainEqual(v);
    expect(() =>
      jestExpect(list).not.toContainEqual(v)
    ).toThrowErrorMatchingSnapshot();
  });
}
