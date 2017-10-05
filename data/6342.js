{
  fs.mkdirSync("build");
  fs.mkdirSync(join("build", "packages"));
  fs.mkdirSync(join("build", "dist"));
  const tasks = [
    Packaging.createFacebookWWWBuild,
    Packaging.createReactNativeBuild
  ];

  for (const bundle of Bundles.bundles) {
    tasks.push(
      () => createBundle(bundle, UMD_DEV),
      () => createBundle(bundle, UMD_PROD),
      () => createBundle(bundle, NODE_DEV),
      () => createBundle(bundle, NODE_PROD),
      () => createBundle(bundle, FB_DEV),
      () => createBundle(bundle, FB_PROD),
      () => createBundle(bundle, RN_DEV),
      () => createBundle(bundle, RN_PROD)
    );
  }

  if (syncFbsource) {
    tasks.push(() =>
      syncReactNative(join("build", "react-native"), syncFbsource)
    );
  } else if (syncWww) {
    tasks.push(() => syncReactDom(join("build", "facebook-www"), syncWww));
  }

  return runWaterfall(tasks)
    .then(() => {
      console.log(Stats.printResults());
      Stats.saveResults();

      if (argv["extract-errors"]) {
        console.warn(
          "\nWarning: this build was created with --extract-errors enabled.\n" +
            "this will result in extremely slow builds and should only be\n" +
            "used when the error map needs to be rebuilt.\n"
        );
      }
    })
    .catch(err => {
      console.error(err);
      process.exit(1);
    });
}
