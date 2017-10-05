{
  switch (bundleType) {
    case UMD_DEV:
    case UMD_PROD:
      const fbjsModulesAlias = {};
      fbjsModules.forEach(fbjsModule => {
        fbjsModulesAlias[fbjsModule] = resolve(`./node_modules/${fbjsModule}`);
      });
      return fbjsModulesAlias;

    case NODE_DEV:
    case NODE_PROD:
    case FB_DEV:
    case FB_PROD:
    case RN_DEV:
    case RN_PROD:
      return {};
  }
}
