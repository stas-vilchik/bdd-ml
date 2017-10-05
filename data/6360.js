{
  const files = sync(path, {
    ignore: exclude
  });
  files.forEach(file => {
    if (extractErrors) {
      extractErrors(file);
    }

    const moduleName = basename(file, ".js");
    moduleMap[moduleName] = resolve(file);
  });
}
