{
  const filename = path.join(__dirname, "old-snapshot.snap");
  fs.readFileSync = jest.fn(
    () =>
      `// Jest Snapshot v0.99, ${SNAPSHOT_GUIDE_LINK}\n\n` +
      "exports[`myKey`] = `<div>\n</div>`;\n"
  );
  const update = "none";
  expect(() => getSnapshotData(filename, update)).toThrowError(
    chalk.red(
      `${chalk.red.bold("Outdated snapshot")}: The version of the snapshot ` +
        `file associated with this test is outdated. The snapshot file ` +
        `version ensures that all developers on a project are using ` +
        `the same version of Jest. ` +
        `Please update all snapshots during this upgrade of Jest.\n\n`
    ) +
      `Expected: v${SNAPSHOT_VERSION}\n` +
      `Received: v0.99\n\n` +
      SNAPSHOT_VERSION_WARNING
  );
}
