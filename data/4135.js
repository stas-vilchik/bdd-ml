{
  let result = runJest("snapshot-escape", [
    "-w=1",
    "--ci=false",
    "snapshot.test.js"
  ]);
  let stderr = result.stderr.toString();
  expect(stderr).toMatch("1 snapshot written");
  expect(result.status).toBe(0);
  expect(extractSummary(stderr).summary).toMatchSnapshot();
  const testData =
    `test('escape strings two', () => expect('two: \\\'\"').` +
    `toMatchSnapshot());`;
  const newTestData = initialTestData + testData;
  fs.writeFileSync(snapshotEscapeTestFile, newTestData, "utf8");
  result = runJest("snapshot-escape", [
    "-w=1",
    "--ci=false",
    "--updateSnapshot",
    "snapshot.test.js"
  ]);
  stderr = result.stderr.toString();
  expect(stderr).toMatch("1 snapshot written");
  expect(extractSummary(stderr).summary).toMatchSnapshot();
  expect(result.status).toBe(0);
  result = runJest("snapshot-escape", [
    "-w=1",
    "--ci=false",
    "snapshot.test.js"
  ]);
  stderr = result.stderr.toString();
  expect(stderr).not.toMatch("Snapshot Summary");
  expect(extractSummary(stderr).summary).toMatchSnapshot();
  expect(result.status).toBe(0);
}
