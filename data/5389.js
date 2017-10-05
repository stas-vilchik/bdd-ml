{
  try {
    return fs.statSync(filename).isFile();
  } catch (e) {}

  return false;
}
