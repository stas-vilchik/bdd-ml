{
  Object.defineProperty(HTMLElement.prototype, name, {
    value: function() {
      scope.renderAllPending();
      return unsafeUnwrap(this)[name].apply(unsafeUnwrap(this), arguments);
    },
    configurable: true,
    enumerable: true
  });
}
