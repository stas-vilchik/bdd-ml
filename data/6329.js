{
  name = name.replace("/", "-");

  switch (bundleType) {
    case UMD_DEV:
      return `${name}.development.js`;

    case UMD_PROD:
      return `${name}.production.min.js`;

    case NODE_DEV:
      return `${name}.development.js`;

    case NODE_PROD:
      return `${name}.production.min.js`;

    case FB_DEV:
    case RN_DEV:
      return `${hasteName}-dev.js`;

    case FB_PROD:
    case RN_PROD:
      return `${hasteName}-prod.js`;
  }
}
