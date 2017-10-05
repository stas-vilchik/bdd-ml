{
  let repo;
  const remoteRepoDir = getDefaultReactPath();

  if (!skipBuild) {
    if (clean) {
      await cleanDir(remoteRepoDir);
    }

    if (existsSync(join(__dirname, 'remote-repo'))) {
      repo = await Git.Repository.open(remoteRepoDir);
      await repo.fetchAll();
    } else {
      repo = await Git.Clone(url, remoteRepoDir);
    }

    let commit = await repo.getBranchCommit('master');
    await Git.Reset.reset(repo, commit, Git.Reset.TYPE.HARD);
    await repo.checkoutBranch('master');
    await repo.mergeBranches('master', 'origin/master');

    if (commitId && commitId !== 'master') {
      commit = await Git.Commit.lookup(repo, commitId);
      await Git.Checkout.tree(repo, commit);
    }

    await buildAllBundles();
  }

  return getBundleResults();
}