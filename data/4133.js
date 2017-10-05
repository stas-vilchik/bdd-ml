{
  if (fileExists(file)) {
    fs.unlinkSync(file);
  }
}
