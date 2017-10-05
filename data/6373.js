{
  const stubbedModules = {};

  if (Array.isArray(bundleModulesToStub)) {
    bundleModulesToStub.forEach(module => {
      stubbedModules[`'${module}'`] = devOnlyModuleStub;
    });
  }

  return stubbedModules;
}
