{
  const filename = path.join(__dirname, "old-snapshot.snap");
  fs.readFileSync = jest.fn(() => "exports[`myKey`] = `<div>\n</div>`;\n");
  const update = "all";
  expect(() => getSnapshotData(filename, update)).not.toThrow();
}
