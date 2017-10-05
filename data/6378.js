{
  fs.mkdirSync(join("build", "react-native"));
  fs.mkdirSync(join("build", "react-native", "shims"));
  const from = join("scripts", "rollup", "shims", "react-native");
  const to = join("build", "react-native", "shims");
  return asyncCopyTo(from, to).then(() => {
    let promises = [];

    for (const srcDependency of reactNativeSrcDependencies) {
      promises.push(
        asyncCopyTo(resolve(srcDependency), join(to, basename(srcDependency)))
      );
    }

    return Promise.all(promises);
  });
}
