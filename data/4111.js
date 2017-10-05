{
  it("outputs coverage report", () => {
    const result = runJest("coverage_report", ["not-a-valid-test"]);
    const stdout = result.stdout.toString();
    expect(stdout).toMatch("No tests found");
    expect(stdout).not.toMatch("0 tests passed");
  });
}
