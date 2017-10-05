{
  const { stderr } = runJest(dir, ["node_assertion_error.test.js"]);
  expect(normalizeDots(extractSummary(stderr).rest)).toMatchSnapshot();
}
