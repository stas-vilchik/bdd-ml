{
  const benchmarkNames = getBenchmarkNames();
  const results = {};
  const server = serveBenchmark();
  await wait(1000);

  for (let i = 0; i < benchmarkNames.length; i++) {
    const benchmarkName = benchmarkNames[i];

    if (!benchmarkFilter || benchmarkFilter && benchmarkName.indexOf(benchmarkFilter) !== -1) {
      console.log(chalk.gray(`- Building benchmark "${chalk.white(benchmarkName)}"...`));
      await buildBenchmark(reactPath, benchmarkName);
      console.log(chalk.gray(`- Running benchmark "${chalk.white(benchmarkName)}"...`));
      results[benchmarkName] = await runBenchmark(benchmarkName, headless);
    }
  }

  server.close();
  await wait(500);
  return results;
}