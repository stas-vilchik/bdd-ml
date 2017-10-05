{
  let promises = [];

  for (const srcDependency of reactNativeSrcDependencies) {
    promises.push(
      asyncCopyTo(resolve(srcDependency), join(to, basename(srcDependency)))
    );
  }

  return Promise.all(promises);
}
