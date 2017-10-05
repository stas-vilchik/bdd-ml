{
  console.log(chalk.white.bold('Running benchmarks for ') + chalk.green.bold('Local (Current Branch)'));
  const localResults = await benchmarkLocal(join(__dirname, '..', '..'));

  if (showResults) {
    printResults(localResults, null);
  }

  return localResults;
}