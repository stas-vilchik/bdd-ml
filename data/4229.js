{
  const onTestResult = this._statsCollected.onTestResult;
  onTestResult.called = true;
  onTestResult.times++;
}
