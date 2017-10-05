{
  ("use strict");

  var HTMLElement = scope.wrappers.HTMLElement;
  var mixin = scope.mixin;
  var registerWrapper = scope.registerWrapper;
  var unsafeUnwrap = scope.unsafeUnwrap;
  var unwrap = scope.unwrap;
  var wrap = scope.wrap;
  var contentTable = new WeakMap();
  var templateContentsOwnerTable = new WeakMap();

  function getTemplateContentsOwner(doc) {
    if (!doc.defaultView) return doc;
    var d = templateContentsOwnerTable.get(doc);

    if (!d) {
      d = doc.implementation.createHTMLDocument("");

      while (d.lastChild) {
        d.removeChild(d.lastChild);
      }

      templateContentsOwnerTable.set(doc, d);
    }

    return d;
  }

  function extractContent(templateElement) {
    var doc = getTemplateContentsOwner(templateElement.ownerDocument);
    var df = unwrap(doc.createDocumentFragment());
    var child;

    while ((child = templateElement.firstChild)) {
      df.appendChild(child);
    }

    return df;
  }

  var OriginalHTMLTemplateElement = window.HTMLTemplateElement;

  function HTMLTemplateElement(node) {
    HTMLElement.call(this, node);

    if (!OriginalHTMLTemplateElement) {
      var content = extractContent(node);
      contentTable.set(this, wrap(content));
    }
  }

  HTMLTemplateElement.prototype = Object.create(HTMLElement.prototype);
  mixin(HTMLTemplateElement.prototype, {
    constructor: HTMLTemplateElement,

    get content() {
      if (OriginalHTMLTemplateElement) return wrap(unsafeUnwrap(this).content);
      return contentTable.get(this);
    }
  });
  if (OriginalHTMLTemplateElement)
    registerWrapper(OriginalHTMLTemplateElement, HTMLTemplateElement);
  scope.wrappers.HTMLTemplateElement = HTMLTemplateElement;
}
