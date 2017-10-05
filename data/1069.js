{
  outputFileSync(".babelrc", "{}");
  Object.keys(files).forEach(function(filename) {
    const content = files[filename];
    outputFileSync(filename, content);
  });
}
