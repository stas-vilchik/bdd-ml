{
  this.userContext = options.userContext;
  this.activeInstance = options.activeInstance;
  this.renderStates = [];
  this.write = options.write;
  this.done = options.done;
  this.renderNode = options.renderNode;
  this.isUnaryTag = options.isUnaryTag;
  this.modules = options.modules;
  this.directives = options.directives;
  var cache = options.cache;

  if (cache && (!cache.get || !cache.set)) {
    throw new Error("renderer cache must implement at least get & set.");
  }

  this.cache = cache;
  this.get = cache && normalizeAsync(cache, "get");
  this.has = cache && normalizeAsync(cache, "has");
  this.next = this.next.bind(this);
}
