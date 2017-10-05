{
  coverageMap[filename].path = path.basename(coverageMap[filename].path);
  coverageMap[path.basename(filename)] = coverageMap[filename];
  delete coverageMap[filename];
}
