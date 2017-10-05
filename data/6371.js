{
  switch (bundleType) {
    case UMD_DEV:
    case UMD_PROD:
      const modulesAlias = {};
      legacyModules.forEach(legacyModule => {
        const modulePath = legacyModule.includes("/")
          ? legacyModule
          : `${legacyModule}/index`;
        const resolvedPath = resolve(`./node_modules/${modulePath}`);
        modulesAlias[`'${legacyModule}'`] = `'${resolvedPath}'`;
      });
      return modulesAlias;

    case NODE_DEV:
    case NODE_PROD:
    case FB_DEV:
    case FB_PROD:
    case RN_DEV:
    case RN_PROD:
      return {};
  }
}
