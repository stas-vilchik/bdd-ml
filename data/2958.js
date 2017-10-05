{
  return Promise.all(
    contents.map(function(name) {
      return findTests(path.join(dirName, name));
    })
  ).then(flatten);
}
