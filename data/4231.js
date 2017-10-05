{
  const onRunComplete = this._statsCollected.onRunComplete;
  onRunComplete.called = true;
  onRunComplete.numPassedTests = results.numPassedTests;
  onRunComplete.numFailedTests = results.numFailedTests;
  onRunComplete.numTotalTests = results.numTotalTests;

  if (this._statsCollected.options.maxWorkers) {
    this._statsCollected.options.maxWorkers = "<<REPLACED>>";
  }

  process.stdout.write(JSON.stringify(this._statsCollected, null, 4));
}
