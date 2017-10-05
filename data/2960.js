{
  return pfs.stat(name).then(function(stat) {
    if (stat.isDirectory()) {
      return readDirDeep(name);
    }

    return name;
  });
}
