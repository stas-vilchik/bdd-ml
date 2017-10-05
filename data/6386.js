{
  if (bundleType !== FB_DEV && bundleType !== FB_PROD) {
    return copyNodePackageTemplate(packageName).then(() =>
      copyBundleIntoNodePackage(packageName, filename, bundleType)
    );
  }

  return Promise.resolve();
}
