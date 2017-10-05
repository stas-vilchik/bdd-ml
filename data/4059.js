{
  it("fails the test suite if it contains no tests", () => {
    const result = runJest(DIR, []);
    const stderr = result.stderr.toString();
    expect(stderr).toMatch("Test suite failed to run");
    expect(stderr).toMatch("Your test suite must contain at least one test.");
  });
}
