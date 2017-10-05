{
  return Promise.all(
    testPaths.map(function(path) {
      return readTest(path, testDir);
    })
  );
}
