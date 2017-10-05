{
  return fs.readdirSync(directory).map(fileName => ({
    directory,
    fileName
  }));
}
