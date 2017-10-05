{
  const dir = path.resolve(__dirname, "../coverage-remapping");
  run("yarn", dir);
  runJest(dir, ["--coverage", "--mapCoverage", "--no-cache"]);
  const coverageMapFile = path.join(
    __dirname,
    "../coverage-remapping/coverage/coverage-final.json"
  );
  const coverageMap = JSON.parse(readFileSync(coverageMapFile, "utf-8"));
  Object.keys(coverageMap).forEach(filename => {
    coverageMap[filename].path = path.basename(coverageMap[filename].path);
    coverageMap[path.basename(filename)] = coverageMap[filename];
    delete coverageMap[filename];
  });
  expect(coverageMap).toMatchSnapshot();
}
