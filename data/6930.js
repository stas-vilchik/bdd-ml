{
  ("use strict");

  var EventTarget = scope.wrappers.EventTarget;
  var Selection = scope.wrappers.Selection;
  var mixin = scope.mixin;
  var registerWrapper = scope.registerWrapper;
  var renderAllPending = scope.renderAllPending;
  var unwrap = scope.unwrap;
  var unwrapIfNeeded = scope.unwrapIfNeeded;
  var wrap = scope.wrap;
  var OriginalWindow = window.Window;
  var originalGetComputedStyle = window.getComputedStyle;
  var originalGetDefaultComputedStyle = window.getDefaultComputedStyle;
  var originalGetSelection = window.getSelection;

  function Window(impl) {
    EventTarget.call(this, impl);
  }

  Window.prototype = Object.create(EventTarget.prototype);

  OriginalWindow.prototype.getComputedStyle = function(el, pseudo) {
    return wrap(this || window).getComputedStyle(unwrapIfNeeded(el), pseudo);
  };

  if (originalGetDefaultComputedStyle) {
    OriginalWindow.prototype.getDefaultComputedStyle = function(el, pseudo) {
      return wrap(this || window).getDefaultComputedStyle(
        unwrapIfNeeded(el),
        pseudo
      );
    };
  }

  OriginalWindow.prototype.getSelection = function() {
    return wrap(this || window).getSelection();
  };

  delete window.getComputedStyle;
  delete window.getDefaultComputedStyle;
  delete window.getSelection;
  ["addEventListener", "removeEventListener", "dispatchEvent"].forEach(function(
    name
  ) {
    OriginalWindow.prototype[name] = function() {
      var w = wrap(this || window);
      return w[name].apply(w, arguments);
    };

    delete window[name];
  });
  mixin(Window.prototype, {
    getComputedStyle: function(el, pseudo) {
      renderAllPending();
      return originalGetComputedStyle.call(
        unwrap(this),
        unwrapIfNeeded(el),
        pseudo
      );
    },
    getSelection: function() {
      renderAllPending();
      return new Selection(originalGetSelection.call(unwrap(this)));
    },

    get document() {
      return wrap(unwrap(this).document);
    }
  });

  if (originalGetDefaultComputedStyle) {
    Window.prototype.getDefaultComputedStyle = function(el, pseudo) {
      renderAllPending();
      return originalGetDefaultComputedStyle.call(
        unwrap(this),
        unwrapIfNeeded(el),
        pseudo
      );
    };
  }

  registerWrapper(OriginalWindow, Window, window);
  scope.wrappers.Window = Window;
}
