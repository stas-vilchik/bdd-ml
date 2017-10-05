{
  this._options = options;
  this._statsCollected = {
    onRunComplete: {},
    onRunStart: {},
    onTestResult: {
      times: 0
    },
    onTestStart: {},
    options
  };
}
