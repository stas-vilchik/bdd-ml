{
  mockFiles.clear();
  Object.keys(newMockFiles).forEach(fileName => {
    mockFiles.set(fileName, newMockFiles[fileName]);
  });
}
