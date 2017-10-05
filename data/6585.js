{
  descr.get = function() {
    return unsafeUnwrap(this)[name];
  };

  Object.defineProperty(Touch.prototype, name, descr);
}
