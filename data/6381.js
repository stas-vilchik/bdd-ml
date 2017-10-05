{
  let promises = [];

  for (const srcDependency of facebookWWWSrcDependencies) {
    promises.push(
      asyncCopyTo(resolve(srcDependency), join(to, basename(srcDependency)))
    );
  }

  return Promise.all(promises);
}
