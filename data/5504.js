{
  return fs.statSync(path.join(__dirname, file)).isDirectory();
}
