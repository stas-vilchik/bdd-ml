{
  const results = {
    runs: [],
    averages: []
  };
  await initChrome();

  for (let i = 0; i < timesToRun; i++) {
    let launcher = await launchChrome(headless);
    results.runs.push((await runScenario(benchmark, launcher)));
    await wait(500);

    try {
      await launcher.kill();
    } catch (e) {}
  }

  results.averages = calculateAverages(results.runs);
  return results;
}