{
  console.log(chalk.white.bold('Running benchmarks for ') + chalk.yellow.bold('Remote (Merge Base)'));
  const remoteMasterResults = await benchmarkRemoteMaster();

  if (showResults) {
    printResults(null, remoteMasterResults);
  }

  return remoteMasterResults;
}