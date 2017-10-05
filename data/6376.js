{
  return Object.assign(
    {},
    replaceFbjsModuleAliases(bundleType),
    replaceDevOnlyStubbedModules(bundleType),
    replaceLegacyModuleAliases(bundleType),
    replaceBundleStubModules(bundleModulesToStub)
  );
}
