{
  if (res.commit) {
    git.commit(app, newVersion, true);
  }

  if (res.tag) {
    git.tag(app, `v${newVersion}`);
  }

  actionCB();
}
