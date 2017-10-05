{
  try {
    return fs.statSync(filePath).isFile();
  } catch (e) {}

  return false;
}
