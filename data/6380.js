{
  fs.mkdirSync(join("build", facebookWWW));
  fs.mkdirSync(join("build", facebookWWW, "shims"));
  const from = join("scripts", "rollup", "shims", facebookWWW);
  const to = join("build", facebookWWW, "shims");
  return asyncCopyTo(from, to).then(() => {
    let promises = [];

    for (const srcDependency of facebookWWWSrcDependencies) {
      promises.push(
        asyncCopyTo(resolve(srcDependency), join(to, basename(srcDependency)))
      );
    }

    return Promise.all(promises);
  });
}
