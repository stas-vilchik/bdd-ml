{
  switch (bundleType) {
    case UMD_DEV:
    case UMD_PROD:
    case NODE_DEV:
    case NODE_PROD:
      return {};

    case RN_DEV:
    case RN_PROD:
      return {
        ignore: Modules.ignoreReactNativeModules()
      };

    case FB_DEV:
    case FB_PROD:
      return {
        ignore: Modules.ignoreFBModules()
      };
  }
}
