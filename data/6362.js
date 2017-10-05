{
  switch (bundleType) {
    case UMD_DEV:
    case UMD_PROD:
      return {
        "object-assign": isRenderer
          ? resolve("./scripts/rollup/shims/rollup/assign.js")
          : resolve("./node_modules/object-assign/index.js"),
        "art/modes/current": resolve("./node_modules/art/modes/current.js"),
        "art/modes/fast-noSideEffects": resolve(
          "./node_modules/art/modes/fast-noSideEffects.js"
        ),
        "art/core/transform": resolve("./node_modules/art/core/transform.js")
      };

    case NODE_DEV:
    case NODE_PROD:
    case FB_DEV:
    case FB_PROD:
    case RN_DEV:
    case RN_PROD:
      return {};
  }
}
