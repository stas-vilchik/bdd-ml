{
  ("use strict");

  var EventTarget = scope.wrappers.EventTarget;
  var mixin = scope.mixin;
  var registerWrapper = scope.registerWrapper;
  var unsafeUnwrap = scope.unsafeUnwrap;
  var wrap = scope.wrap;
  var OriginalSVGElementInstance = window.SVGElementInstance;
  if (!OriginalSVGElementInstance) return;

  function SVGElementInstance(impl) {
    EventTarget.call(this, impl);
  }

  SVGElementInstance.prototype = Object.create(EventTarget.prototype);
  mixin(SVGElementInstance.prototype, {
    get correspondingElement() {
      return wrap(unsafeUnwrap(this).correspondingElement);
    },

    get correspondingUseElement() {
      return wrap(unsafeUnwrap(this).correspondingUseElement);
    },

    get parentNode() {
      return wrap(unsafeUnwrap(this).parentNode);
    },

    get childNodes() {
      throw new Error("Not implemented");
    },

    get firstChild() {
      return wrap(unsafeUnwrap(this).firstChild);
    },

    get lastChild() {
      return wrap(unsafeUnwrap(this).lastChild);
    },

    get previousSibling() {
      return wrap(unsafeUnwrap(this).previousSibling);
    },

    get nextSibling() {
      return wrap(unsafeUnwrap(this).nextSibling);
    }
  });
  registerWrapper(OriginalSVGElementInstance, SVGElementInstance);
  scope.wrappers.SVGElementInstance = SVGElementInstance;
}
