{
  ref = ref || "";
  return app.execInRepo(`git tag ${tag} ${ref}`);
}
