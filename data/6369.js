{
  switch (bundleType) {
    case UMD_DEV:
    case NODE_DEV:
    case FB_DEV:
    case RN_DEV:
    case RN_PROD:
      return {};

    case FB_PROD:
    case UMD_PROD:
    case NODE_PROD:
      const devOnlyModuleAliases = {};
      devOnlyFilesToStubOut.forEach(devOnlyModule => {
        devOnlyModuleAliases[devOnlyModule] = devOnlyModuleStub;
      });
      return devOnlyModuleAliases;
  }
}
