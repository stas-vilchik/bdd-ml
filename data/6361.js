{
  if (extractErrors) {
    extractErrors(file);
  }

  const moduleName = basename(file, ".js");
  moduleMap[moduleName] = resolve(file);
}
