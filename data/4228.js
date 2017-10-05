{
  const onTestStart = this._statsCollected.onTestStart;
  onTestStart.called = true;
  onTestStart.path = typeof path === "string";
}
