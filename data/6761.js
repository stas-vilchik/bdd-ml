{
  ("use strict");

  var HTMLElement = scope.wrappers.HTMLElement;
  var mixin = scope.mixin;
  var registerWrapper = scope.registerWrapper;
  var unwrap = scope.unwrap;
  var wrap = scope.wrap;
  var OriginalHTMLSelectElement = window.HTMLSelectElement;

  function HTMLSelectElement(node) {
    HTMLElement.call(this, node);
  }

  HTMLSelectElement.prototype = Object.create(HTMLElement.prototype);
  mixin(HTMLSelectElement.prototype, {
    add: function(element, before) {
      if (typeof before === "object") before = unwrap(before);
      unwrap(this).add(unwrap(element), before);
    },
    remove: function(indexOrNode) {
      if (indexOrNode === undefined) {
        HTMLElement.prototype.remove.call(this);
        return;
      }

      if (typeof indexOrNode === "object") indexOrNode = unwrap(indexOrNode);
      unwrap(this).remove(indexOrNode);
    },

    get form() {
      return wrap(unwrap(this).form);
    }
  });
  registerWrapper(
    OriginalHTMLSelectElement,
    HTMLSelectElement,
    document.createElement("select")
  );
  scope.wrappers.HTMLSelectElement = HTMLSelectElement;
}
