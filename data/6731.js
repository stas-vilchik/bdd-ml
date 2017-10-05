{
  ("use strict");

  var HTMLElement = scope.wrappers.HTMLElement;
  var mixin = scope.mixin;
  var registerWrapper = scope.registerWrapper;
  var OriginalHTMLContentElement = window.HTMLContentElement;

  function HTMLContentElement(node) {
    HTMLElement.call(this, node);
  }

  HTMLContentElement.prototype = Object.create(HTMLElement.prototype);
  mixin(HTMLContentElement.prototype, {
    constructor: HTMLContentElement,

    get select() {
      return this.getAttribute("select");
    },

    set select(value) {
      this.setAttribute("select", value);
    },

    setAttribute: function(n, v) {
      HTMLElement.prototype.setAttribute.call(this, n, v);
      if (String(n).toLowerCase() === "select")
        this.invalidateShadowRenderer(true);
    }
  });
  if (OriginalHTMLContentElement)
    registerWrapper(OriginalHTMLContentElement, HTMLContentElement);
  scope.wrappers.HTMLContentElement = HTMLContentElement;
}
