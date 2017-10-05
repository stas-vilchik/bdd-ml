{
  return app.execInRepo(`git status --untracked-files=no --porcelain`);
}
