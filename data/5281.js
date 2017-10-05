{
  const filename = path.join(__dirname, "remove-newlines.snap");
  const data = {
    myKey: "<div>\r\n</div>"
  };
  saveSnapshotFile(data, filename);
  expect(fs.writeFileSync).toBeCalledWith(
    filename,
    `// Jest Snapshot v1, ${SNAPSHOT_GUIDE_LINK}\n\n` +
      "exports[`myKey`] = `<div>\n</div>`;\n"
  );
}
