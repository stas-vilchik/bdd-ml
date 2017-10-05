{
  ("use strict");

  var HTMLElement = scope.wrappers.HTMLElement;
  var mixin = scope.mixin;
  var registerWrapper = scope.registerWrapper;
  var wrapHTMLCollection = scope.wrapHTMLCollection;
  var unwrap = scope.unwrap;
  var wrap = scope.wrap;
  var OriginalHTMLTableRowElement = window.HTMLTableRowElement;

  function HTMLTableRowElement(node) {
    HTMLElement.call(this, node);
  }

  HTMLTableRowElement.prototype = Object.create(HTMLElement.prototype);
  mixin(HTMLTableRowElement.prototype, {
    get cells() {
      return wrapHTMLCollection(unwrap(this).cells);
    },

    insertCell: function(index) {
      return wrap(unwrap(this).insertCell(index));
    }
  });
  registerWrapper(
    OriginalHTMLTableRowElement,
    HTMLTableRowElement,
    document.createElement("tr")
  );
  scope.wrappers.HTMLTableRowElement = HTMLTableRowElement;
}
