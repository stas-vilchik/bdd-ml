{
  this._id = lib$es6$promise$promise$$counter++;
  this._state = undefined;
  this._result = undefined;
  this._subscribers = [];

  if (lib$es6$promise$$internal$$noop !== resolver) {
    if (!lib$es6$promise$utils$$isFunction(resolver)) {
      lib$es6$promise$promise$$needsResolver();
    }

    if (!(this instanceof lib$es6$promise$promise$$Promise)) {
      lib$es6$promise$promise$$needsNew();
    }

    lib$es6$promise$$internal$$initializePromise(this, resolver);
  }
}
