{
  ("use strict");

  var HTMLElement = scope.wrappers.HTMLElement;
  var mixin = scope.mixin;
  var registerWrapper = scope.registerWrapper;
  var wrapHTMLCollection = scope.wrapHTMLCollection;
  var unwrap = scope.unwrap;
  var OriginalHTMLFormElement = window.HTMLFormElement;

  function HTMLFormElement(node) {
    HTMLElement.call(this, node);
  }

  HTMLFormElement.prototype = Object.create(HTMLElement.prototype);
  mixin(HTMLFormElement.prototype, {
    get elements() {
      return wrapHTMLCollection(unwrap(this).elements);
    }
  });
  registerWrapper(
    OriginalHTMLFormElement,
    HTMLFormElement,
    document.createElement("form")
  );
  scope.wrappers.HTMLFormElement = HTMLFormElement;
}
