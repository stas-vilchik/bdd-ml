{
  console.log(chalk.gray(`- Building React bundles...`));
  let commit = argv.remote;

  if (!commit || typeof commit !== 'string') {
    commit = await getMergeBaseFromLocalGitRepo(join(__dirname, '..', '..'));
    console.log(chalk.gray(`- Merge base commit ${chalk.white(commit.tostrS())}`));
  }

  return {
    bundles: await buildBenchmarkBundlesFromGitRepo(commit, skipBuild),
    benchmarks: await runBenchmarks()
  };
}