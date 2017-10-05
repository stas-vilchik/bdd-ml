{
  if (!window[name]) return;
  assert(!scope.wrappers[name]);

  var GeneratedWrapper = function(node) {
    HTMLElement.call(this, node);
  };

  GeneratedWrapper.prototype = Object.create(HTMLElement.prototype);
  mixin(GeneratedWrapper.prototype, {
    get form() {
      return wrap(unwrap(this).form);
    }
  });
  registerWrapper(
    window[name],
    GeneratedWrapper,
    document.createElement(name.slice(4, -7))
  );
  scope.wrappers[name] = GeneratedWrapper;
}
