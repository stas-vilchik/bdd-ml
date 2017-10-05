{
  const repo = await Git.Repository.open(localRepo);
  return await Git.Merge.base(repo, (await repo.getHeadCommit()), (await repo.getBranchCommit('master')));
}