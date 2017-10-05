{
  it("fails with no path", () => {
    const expectedOutput =
      "Please provide a path to a script. (See --help for details)\n";
    expect(run([]).stdout).toBe(expectedOutput);
  });
  it("displays script output", () => {
    const scriptPath = path.resolve(__dirname, "./test_root/logging.js");
    expect(run([scriptPath, "--no-cache"]).stdout).toMatch("Hello, world!\n");
  });
  it("always disables automocking", () => {
    const scriptPath = path.resolve(__dirname, "./test_root/logging.js");
    const output = run([
      scriptPath,
      "--no-cache",
      "--config=" +
        JSON.stringify({
          automock: true
        })
    ]);
    expect(output.stdout).toMatch("Hello, world!\n");
  });
  it("throws script errors", () => {
    const scriptPath = path.resolve(__dirname, "./test_root/throwing.js");
    expect(run([scriptPath, "--no-cache"]).stderr).toMatch("Error: throwing\n");
  });
}
