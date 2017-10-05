callback(null, {
  isDirectory() {
    return path.endsWith("/directory");
  },

  isSymbolicLink() {
    return false;
  },

  mtime: {
    getTime() {
      return mtime++;
    }
  }
});
