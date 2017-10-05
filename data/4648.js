{
  try {
    jestExpect(true).toMatchPredicate(value => {
      jestExpect(value).toBe(false);
    });
  } catch (error) {
    expect(error.stack).toContain("stacktrace.test.js:32");
  }
}
