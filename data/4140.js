{
  const result = runJest.json("snapshot", ["-w=1", "--ci=true"]);
  expect(result.json.success).toBe(false);
  expect(result.json.numTotalTests).toBe(9);
  expect(result.json.snapshot.added).toBe(0);
  expect(result.json.snapshot.total).toBe(9);
  const { rest, summary } = extractSummary(result.stderr.toString());
  expect(rest).toMatch("New snapshot was not written");
  expect(summary).toMatchSnapshot();
}
