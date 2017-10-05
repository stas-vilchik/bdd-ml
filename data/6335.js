{
  const shouldSkipBundleType = bundle.bundleTypes.indexOf(bundleType) === -1;

  if (shouldSkipBundleType) {
    return Promise.resolve();
  }

  if (requestedBundleTypes.length > 0) {
    const isAskingForDifferentType = requestedBundleTypes.every(
      requestedType => bundleType.indexOf(requestedType) === -1
    );

    if (isAskingForDifferentType) {
      return Promise.resolve();
    }
  }

  if (requestedBundleNames.length > 0) {
    const isAskingForDifferentNames = requestedBundleNames.every(
      requestedName => bundle.label.indexOf(requestedName) === -1
    );

    if (isAskingForDifferentNames) {
      return Promise.resolve();
    }
  }

  const filename = getFilename(bundle.name, bundle.hasteName, bundleType);
  const logKey =
    chalk.white.bold(filename) + chalk.dim(` (${bundleType.toLowerCase()})`);
  const format = getFormat(bundleType);
  const packageName = Packaging.getPackageName(bundle.name);
  console.log(`${chalk.bgYellow.black(" BUILDING ")} ${logKey}`);
  return rollup({
    entry:
      bundleType === FB_DEV || bundleType === FB_PROD
        ? bundle.fbEntry
        : bundle.entry,
    external: Modules.getExternalModules(
      bundle.externals,
      bundleType,
      bundle.isRenderer
    ),
    onwarn: handleRollupWarnings,
    plugins: getPlugins(
      bundle.entry,
      bundle.babelOpts,
      bundle.paths,
      filename,
      bundleType,
      bundle.hasteName,
      bundle.isRenderer,
      bundle.manglePropertiesOnProd,
      bundle.useFiber,
      bundle.modulesToStub
    )
  })
    .then(result =>
      result.write(
        updateBundleConfig(
          bundle.config,
          filename,
          format,
          bundleType,
          bundle.hasteName
        )
      )
    )
    .then(() => Packaging.createNodePackage(bundleType, packageName, filename))
    .then(() => {
      console.log(`${chalk.bgGreen.black(" COMPLETE ")} ${logKey}\n`);
    })
    .catch(error => {
      if (error.code) {
        console.error(`\x1b[31m-- ${error.code} (${error.plugin}) --`);
        console.error(error.message);
        console.error(error.loc);
        console.error(error.codeFrame);
      } else {
        console.error(error);
      }

      process.exit(1);
    });
}
