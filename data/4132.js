{
  [
    snapshotFile,
    secondSnapshotFile,
    snapshotOfCopy,
    copyOfTestPath,
    snapshotEscapeFile,
    snapshotEscapeRegexFile,
    snapshotEscapeSubstitutionFile
  ].forEach(file => {
    if (fileExists(file)) {
      fs.unlinkSync(file);
    }
  });

  if (fileExists(snapshotDir)) {
    fs.rmdirSync(snapshotDir);
  }

  if (fileExists(snapshotEscapeSnapshotDir)) {
    fs.rmdirSync(snapshotEscapeSnapshotDir);
  }

  fs.writeFileSync(snapshotEscapeTestFile, initialTestData, "utf8");
}
