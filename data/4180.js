{
  const { stderr } = runJest(tempDir, ["--no-cache", "--no-watchman"]);
  expect(stderr).toMatch(/FAIL.*fails_with_syntax_error/);
  expect(stderr).toMatch("Unexpected token");
}
