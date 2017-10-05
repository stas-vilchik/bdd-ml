{
  if (stat.isDirectory()) {
    return readDirDeep(name);
  }

  return name;
}
