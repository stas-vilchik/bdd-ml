{
  const filename = path.join(__dirname, "old-snapshot.snap");
  fs.readFileSync = jest.fn(
    () =>
      `// Jest Snapshot v2, ${SNAPSHOT_GUIDE_LINK}\n\n` +
      "exports[`myKey`] = `<div>\n</div>`;\n"
  );
  const update = "none";
  expect(() => getSnapshotData(filename, update)).toThrowError(
    chalk.red(
      `${chalk.red.bold("Outdated Jest version")}: The version of this ` +
        `snapshot file indicates that this project is meant to be used ` +
        `with a newer version of Jest. ` +
        `The snapshot file version ensures that all developers on a project ` +
        `are using the same version of Jest. ` +
        `Please update your version of Jest and re-run the tests.\n\n`
    ) +
      `Expected: v${SNAPSHOT_VERSION}\n` +
      `Received: v2`
  );
}
