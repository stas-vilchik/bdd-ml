{
  return Object.assign(
    {
      extensions: [".js", ".json"]
    },
    config,
    {
      basedir: path.dirname(path.resolve(file)),
      packageFilter
    }
  );
}
