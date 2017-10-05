{
  ("use strict");

  var mixin = scope.mixin;
  var registerWrapper = scope.registerWrapper;
  var unwrap = scope.unwrap;
  var wrap = scope.wrap;
  var OriginalSVGUseElement = window.SVGUseElement;
  var SVG_NS = "http://www.w3.org/2000/svg";
  var gWrapper = wrap(document.createElementNS(SVG_NS, "g"));
  var useElement = document.createElementNS(SVG_NS, "use");
  var SVGGElement = gWrapper.constructor;
  var parentInterfacePrototype = Object.getPrototypeOf(SVGGElement.prototype);
  var parentInterface = parentInterfacePrototype.constructor;

  function SVGUseElement(impl) {
    parentInterface.call(this, impl);
  }

  SVGUseElement.prototype = Object.create(parentInterfacePrototype);

  if ("instanceRoot" in useElement) {
    mixin(SVGUseElement.prototype, {
      get instanceRoot() {
        return wrap(unwrap(this).instanceRoot);
      },

      get animatedInstanceRoot() {
        return wrap(unwrap(this).animatedInstanceRoot);
      }
    });
  }

  registerWrapper(OriginalSVGUseElement, SVGUseElement, useElement);
  scope.wrappers.SVGUseElement = SVGUseElement;
}
