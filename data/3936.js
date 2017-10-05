{
  renderFn = !renderFn ? fn : renderFn;
  this.clearFrame();
  renderFn();
  requestFrame.call(window, this.loop.bind(this));
}
