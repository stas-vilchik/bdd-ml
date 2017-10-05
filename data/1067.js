{
  const files = {};

  if (fs.existsSync(loc)) {
    readdir(loc, filter).forEach(function(filename) {
      files[filename] = helper.readFile(path.join(loc, filename));
    });
  }

  return files;
}
