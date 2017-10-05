{
  const filename = path.join(__dirname, "old-snapshot.snap");
  fs.readFileSync = jest.fn(() => "exports[`myKey`] = `<div>\n</div>`;\n");
  const update = "none";
  expect(() => getSnapshotData(filename, update)).toThrowError(
    chalk.red(
      `${chalk.bold("Outdated snapshot")}: No snapshot header found. ` +
        `Jest 19 introduced versioned snapshots to ensure all developers on ` +
        `a project are using the same version of Jest. ` +
        `Please update all snapshots during this upgrade of Jest.\n\n`
    ) + SNAPSHOT_VERSION_WARNING
  );
}
