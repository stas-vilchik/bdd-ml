{
  ("use strict");

  var HTMLElement = scope.wrappers.HTMLElement;
  var registerWrapper = scope.registerWrapper;
  var OriginalHTMLMediaElement = window.HTMLMediaElement;
  if (!OriginalHTMLMediaElement) return;

  function HTMLMediaElement(node) {
    HTMLElement.call(this, node);
  }

  HTMLMediaElement.prototype = Object.create(HTMLElement.prototype);
  registerWrapper(
    OriginalHTMLMediaElement,
    HTMLMediaElement,
    document.createElement("audio")
  );
  scope.wrappers.HTMLMediaElement = HTMLMediaElement;
}
