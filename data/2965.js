{
  return findTests(testDir)
    .then(function(testPaths) {
      return Promise.all(
        testPaths.map(function(path) {
          return readTest(path, testDir);
        })
      );
    })
    .then(flatten);
}
