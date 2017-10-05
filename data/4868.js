{
  let mtime = 32;

  const stat = (path, callback) => {
    setTimeout(
      () =>
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
        }),
      0
    );
  };

  return {
    lstat: jest.fn(stat),
    readdir: jest.fn((dir, callback) => {
      if (dir === "/fruits") {
        setTimeout(() => callback(null, ["directory", "tomato.js"]), 0);
      } else if (dir === "/fruits/directory") {
        setTimeout(() => callback(null, ["strawberry.js"]), 0);
      }
    }),
    stat: jest.fn(stat)
  };
}
