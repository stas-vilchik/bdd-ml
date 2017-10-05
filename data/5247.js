{
  isFile: () => !!mockFs[path],
  mtime: {
    getTime: () => 42
  }
}