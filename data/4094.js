{
  writeFiles(DIR, {
    "__tests__/a-banana.js": `test('banana', () => expect(1).toBe(1));`,
    "jest.config.js": `module.exports = i'll break this file yo`,
    "package.json": "{}"
  });
  const { stderr, status } = runJest(DIR, ["-w=1", "--ci=false"]);
  expect(stderr).toMatch("SyntaxError: ");
  expect(status).toBe(1);
}
