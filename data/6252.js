{
  if (!answers.checklist) {
    return reject("Complete the build process first");
  }

  const tgz = glob.sync("build/packages/*.tgz", {
    cwd: app.config.reactPath
  });

  if (tgz.length === 0) {
    reject("No built packages found");
  }

  tgz.forEach(file => {
    this.log(app.execInRepo(`npm publish ${file} --tag=next`));
  });

  if (isStable) {
    tgz.forEach(file => {
      const pkg = path.parse(file).name;
      this.log(
        app.execInRepo(`npm dist-tag add ${pkg}@${currentVersion} latest`)
      );
    });
  }

  resolve();
}
