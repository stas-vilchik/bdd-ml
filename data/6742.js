{
  ("use strict");

  var HTMLElement = scope.wrappers.HTMLElement;
  var mixin = scope.mixin;
  var NodeList = scope.wrappers.NodeList;
  var registerWrapper = scope.registerWrapper;
  var OriginalHTMLShadowElement = window.HTMLShadowElement;

  function HTMLShadowElement(node) {
    HTMLElement.call(this, node);
  }

  HTMLShadowElement.prototype = Object.create(HTMLElement.prototype);
  HTMLShadowElement.prototype.constructor = HTMLShadowElement;
  if (OriginalHTMLShadowElement)
    registerWrapper(OriginalHTMLShadowElement, HTMLShadowElement);
  scope.wrappers.HTMLShadowElement = HTMLShadowElement;
}
