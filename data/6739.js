{
  ("use strict");

  var HTMLElement = scope.wrappers.HTMLElement;
  var registerWrapper = scope.registerWrapper;
  var unwrap = scope.unwrap;
  var rewrap = scope.rewrap;
  var OriginalHTMLImageElement = window.HTMLImageElement;

  function HTMLImageElement(node) {
    HTMLElement.call(this, node);
  }

  HTMLImageElement.prototype = Object.create(HTMLElement.prototype);
  registerWrapper(
    OriginalHTMLImageElement,
    HTMLImageElement,
    document.createElement("img")
  );

  function Image(width, height) {
    if (!(this instanceof Image)) {
      throw new TypeError(
        "DOM object constructor cannot be called as a function."
      );
    }

    var node = unwrap(document.createElement("img"));
    HTMLElement.call(this, node);
    rewrap(node, this);
    if (width !== undefined) node.width = width;
    if (height !== undefined) node.height = height;
  }

  Image.prototype = HTMLImageElement.prototype;
  scope.wrappers.HTMLImageElement = HTMLImageElement;
  scope.wrappers.Image = Image;
}
