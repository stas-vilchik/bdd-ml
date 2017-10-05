{
  const pkg = path.parse(file).name;
  this.log(app.execInRepo(`npm dist-tag add ${pkg}@${currentVersion} latest`));
}
