{
  switch (bundleType) {
    case NODE_DEV:
    case FB_DEV:
    case RN_DEV:
      return "\n})();\n}\n";

    default:
      return "";
  }
}
