{
  ref = ref || "";
  return app.execInRepo(`git pull ${ref}`);
}
