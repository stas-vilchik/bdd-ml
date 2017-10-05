{
  switch (bundleType) {
    case UMD_DEV:
    case UMD_PROD:
      return `umd`;

    case NODE_DEV:
    case NODE_PROD:
    case FB_DEV:
    case FB_PROD:
    case RN_DEV:
    case RN_PROD:
      return `cjs`;
  }
}
