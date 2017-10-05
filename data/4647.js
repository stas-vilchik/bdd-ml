{
  try {
    jestExpect(true).toBe(false);
  } catch (error) {
    expect(error.stack).toContain("stacktrace.test.js:23");
  }
}
