{
  try {
    app.execInRepo(`git cherry-pick -x ${ref}`);
  } catch (e) {
    app.execInRepo(`git cherry-pick -x -m1 ${ref}`);
  }
}
