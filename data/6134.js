{
  console.log(chalk.gray(`- Building React bundles...`));
  return {
    bundles: await buildAllBundles(reactPath, skipBuild),
    benchmarks: await runBenchmarks(reactPath)
  };
}