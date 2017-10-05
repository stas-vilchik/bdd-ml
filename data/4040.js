{
  const { stdout, status } = runJest(DIR, ["--no-cache", "--coverage"]);
  const coverageDir = path.resolve(__dirname, "../coverage_report/coverage");
  expect(stdout).toMatchSnapshot();
  expect(() => fs.accessSync(coverageDir, fs.F_OK)).not.toThrow();
  expect(status).toBe(0);
}
