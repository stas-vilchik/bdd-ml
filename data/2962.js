{
  if (!testNamePattern.test(fileName)) {
    return Promise.resolve([]);
  }

  return pfs.readFile(fileName, "utf-8").then(function(contents) {
    return makeScenarios(path.relative(testDir, fileName), contents);
  });
}
