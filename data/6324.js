{
  switch (bundleType) {
    case FB_DEV:
    case FB_PROD:
    case RN_DEV:
    case RN_PROD:
      return Object.assign({}, babelOpts, {
        plugins: babelOpts.plugins.concat([
          require("./plugins/wrap-warning-with-env-check")
        ])
      });

    case UMD_DEV:
    case UMD_PROD:
    case NODE_DEV:
    case NODE_PROD:
      return Object.assign({}, babelOpts, {
        plugins: babelOpts.plugins.concat([
          resolve("./scripts/babel/transform-object-assign-require"),
          require("../error-codes/replace-invariant-error-codes"),
          require("./plugins/wrap-warning-with-env-check")
        ])
      });

    default:
      return babelOpts;
  }
}
