{
  ("use strict");

  var HTMLElement = scope.wrappers.HTMLElement;
  var assert = scope.assert;
  var mixin = scope.mixin;
  var registerWrapper = scope.registerWrapper;
  var unwrap = scope.unwrap;
  var wrap = scope.wrap;
  var elementsWithFormProperty = [
    "HTMLButtonElement",
    "HTMLFieldSetElement",
    "HTMLInputElement",
    "HTMLKeygenElement",
    "HTMLLabelElement",
    "HTMLLegendElement",
    "HTMLObjectElement",
    "HTMLOutputElement",
    "HTMLTextAreaElement"
  ];

  function createWrapperConstructor(name) {
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

  elementsWithFormProperty.forEach(createWrapperConstructor);
}
