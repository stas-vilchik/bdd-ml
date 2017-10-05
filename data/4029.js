{
  const result = runJest("compare-dom-nodes");
  expect(result.stderr).toContain("FAIL __tests__/failed-assertion.js");
}
