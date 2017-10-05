{
  let result = runJest("snapshot-escape", [
    "-w=1",
    "--ci=false",
    "snapshot_escape_regex.js"
  ]);
  let stderr = result.stderr.toString();
  expect(stderr).toMatch("2 snapshots written in 1 test suite.");
  expect(result.status).toBe(0);
  expect(extractSummary(stderr).summary).toMatchSnapshot();
  result = runJest("snapshot-escape", [
    "-w=1",
    "--ci=false",
    "snapshot_escape_regex.js"
  ]);
  stderr = result.stderr.toString();
  expect(stderr).not.toMatch("Snapshot Summary");
  expect(extractSummary(stderr).summary).toMatchSnapshot();
  expect(result.status).toBe(0);
}
