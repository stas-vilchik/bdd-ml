{
  it("causes tests to be printed in different lines", () => {
    const { status, stdout } = runJest("list_tests", ["--listTests"]);
    expect(status).toBe(0);
    expect(
      normalizePaths(stdout)
        .split("\n")
        .sort()
        .join("\n")
    ).toMatchSnapshot();
  });
  it("causes tests to be printed out as JSON when using the --json flag", () => {
    const { status, stdout } = runJest("list_tests", ["--listTests", "--json"]);
    expect(status).toBe(0);
    expect(() => JSON.parse(stdout)).not.toThrow();
    expect(
      JSON.stringify(
        JSON.parse(stdout)
          .map(normalizePaths)
          .sort()
      )
    ).toMatchSnapshot();
  });
}
