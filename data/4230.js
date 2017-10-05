{
  this.clearLine();
  const onRunStart = this._statsCollected.onRunStart;
  onRunStart.called = true;
  onRunStart.options = typeof options;
}
