{
  const head = [""];

  if (remoteMasterResults) {
    head.push(chalk.yellow.bold("Remote (Merge Base)"));
  }

  if (localResults) {
    head.push(chalk.green.bold("Local (Current Branch)"));
  }

  if (localResults && remoteMasterResults) {
    head.push("");
  }

  const table = new Table({
    head
  });
  addBundleSizeComparsions(table, localResults, remoteMasterResults);
  addBenchmarkResults(table, localResults, remoteMasterResults);
  console.log(table.toString());
}
