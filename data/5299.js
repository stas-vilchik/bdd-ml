{
  const filename = path.join(__dirname, "escaping.snap");
  const data = "\"'\\";
  saveSnapshotFile(
    {
      key: data
    },
    filename
  );
  const writtenData = fs.writeFileSync.mock.calls[0][1];
  expect(writtenData).toBe(
    `// Jest Snapshot v1, ${SNAPSHOT_GUIDE_LINK}\n\n` +
      "exports[`key`] = `\"'\\\\`;\n"
  );
  const exports = {};
  const readData = eval("var exports = {}; " + writtenData + " exports");
  expect(readData).toEqual({
    key: data
  });
  const snapshotData = readData.key;
  expect(data).toEqual(snapshotData);
}
