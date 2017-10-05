{
  it(`fails non-promise value ${stringify(value)}`, async () => {
    let error;

    try {
      await jestExpect(value).resolves.toBeDefined();
    } catch (e) {
      error = e;
    }

    expect(error).toBeDefined();
    expect(error.message).toMatchSnapshot();
  });
}
