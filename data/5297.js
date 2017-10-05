{
  const filename = path.join(__dirname, "old-snapshot.snap");
  fs.readFileSync = jest.fn(
    () =>
      `// Jest Snapshot v${SNAPSHOT_VERSION}, ${SNAPSHOT_GUIDE_LINK}\n\n` +
      "exports[`myKey`] = `<div>\n</div>`;\n"
  );
  const update = "all";
  expect(getSnapshotData(filename, update)).toMatchObject({
    dirty: false
  });
}
