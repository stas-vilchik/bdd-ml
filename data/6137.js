{
  console.log(chalk.white.bold('Comparing ') + chalk.green.bold('Local (Current Branch)') + chalk.white.bold(' to ') + chalk.yellow.bold('Remote (Merge Base)'));
  const localResults = await runLocalBenchmarks(false);
  const remoteMasterResults = await runRemoteBenchmarks(false);
  printResults(localResults, remoteMasterResults);
}