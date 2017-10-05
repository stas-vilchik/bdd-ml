{
  cleanup(tempDir);
  createEmptyPackage(tempDir);
  copyDir(dir, tempDir);
  linkJestPackage("babel-jest", tempDir);
}
