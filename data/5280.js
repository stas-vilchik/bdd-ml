{
  expect(getSnapshotPath("/abc/cde/a.test.js")).toBe(
    path.join("/abc", "cde", "__snapshots__", "a.test.js.snap")
  );
}
