{
  let result = runJest("snapshot-escape", [
    "-w=1",
    "--ci=false",
    "snapshot_escape_substitution.test.js"
  ]);
  let stderr = result.stderr.toString();
  expect(stderr).toMatch("1 snapshot written");
  expect(result.status).toBe(0);
  expect(extractSummary(stderr).summary).toMatchSnapshot();
  result = runJest("snapshot-escape", [
    "-w=1",
    "--ci=false",
    "snapshot_escape_substitution.test.js"
  ]);
  stderr = result.stderr.toString();
  expect(stderr).not.toMatch("1 snapshot written");
  expect(extractSummary(stderr).summary).toMatchSnapshot();
  expect(result.status).toBe(0);
}
