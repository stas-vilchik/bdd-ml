{
  switch (bundleType) {
    case FB_DEV:
    case FB_PROD:
    case RN_DEV:
    case RN_PROD:
      let hasteFinalName = hasteName;

      switch (bundleType) {
        case FB_DEV:
        case RN_DEV:
          hasteFinalName += "-dev";
          break;

        case FB_PROD:
        case RN_PROD:
          hasteFinalName += "-prod";
          break;
      }

      return hasteFinalName;

    case UMD_DEV:
    case UMD_PROD:
      return reactVersion;

    default:
      return null;
  }
}
