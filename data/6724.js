{
  Object.defineProperty(HTMLElement.prototype, name, {
    get: getter(name),
    set: function(v) {
      scope.renderAllPending();
      unsafeUnwrap(this)[name] = v;
    },
    configurable: true,
    enumerable: true
  });
}
