{
  const moduleMap = {};
  paths.forEach(path => {
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
  });

  if (bundleType === FB_DEV || bundleType === FB_PROD) {
    delete moduleMap.ReactCurrentOwner;
    delete moduleMap.lowPriorityWarning;
  }

  return moduleMap;
}
