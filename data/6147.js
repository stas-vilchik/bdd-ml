{
  const row = [chalk.gray(measurement.entry)];
  let remoteMean;
  let remoteSem;

  if (remoteMasterResults) {
    remoteMean = remoteMasterResults.benchmarks[benchmark].averages[i].mean;
    remoteSem = remoteMasterResults.benchmarks[benchmark].averages[i].sem;
    const ci95 = remoteSem * 1.96;
    row.push(chalk.white(+remoteMean.toFixed(2) + " ms +- " + ci95.toFixed(2)));
  }

  let localMean;
  let localSem;

  if (localResults) {
    localMean = localResults.benchmarks[benchmark].averages[i].mean;
    localSem = localResults.benchmarks[benchmark].averages[i].sem;
    const ci95 = localSem * 1.96;
    row.push(chalk.white(+localMean.toFixed(2) + " ms +- " + ci95.toFixed(2)));
  }

  if (localResults && remoteMasterResults) {
    row.push(percentChange(remoteMean, localMean, remoteSem, localSem));
  }

  table.push(row);
}
