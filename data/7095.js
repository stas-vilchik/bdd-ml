{
  this.addCallback = addCallback;
  this.mo = new MutationObserver(this.handler.bind(this));
}
