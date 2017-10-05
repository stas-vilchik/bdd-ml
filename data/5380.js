{
  fileCoverage.path = fileCoverage.path.replace(
    /(.*packages\/.*\/)(build)(\/.*)/,
    "$1src$3"
  );
  return fileCoverage;
}
