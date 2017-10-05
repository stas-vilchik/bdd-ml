{
  ("use strict");

  var mixin = scope.mixin;
  var registerWrapper = scope.registerWrapper;
  var setWrapper = scope.setWrapper;
  var unsafeUnwrap = scope.unsafeUnwrap;
  var unwrapIfNeeded = scope.unwrapIfNeeded;
  var wrap = scope.wrap;
  var OriginalWebGLRenderingContext = window.WebGLRenderingContext;
  if (!OriginalWebGLRenderingContext) return;

  function WebGLRenderingContext(impl) {
    setWrapper(impl, this);
  }

  mixin(WebGLRenderingContext.prototype, {
    get canvas() {
      return wrap(unsafeUnwrap(this).canvas);
    },

    texImage2D: function() {
      arguments[5] = unwrapIfNeeded(arguments[5]);
      unsafeUnwrap(this).texImage2D.apply(unsafeUnwrap(this), arguments);
    },
    texSubImage2D: function() {
      arguments[6] = unwrapIfNeeded(arguments[6]);
      unsafeUnwrap(this).texSubImage2D.apply(unsafeUnwrap(this), arguments);
    }
  });
  var instanceProperties = /WebKit/.test(navigator.userAgent)
    ? {
        drawingBufferHeight: null,
        drawingBufferWidth: null
      }
    : {};
  registerWrapper(
    OriginalWebGLRenderingContext,
    WebGLRenderingContext,
    instanceProperties
  );
  scope.wrappers.WebGLRenderingContext = WebGLRenderingContext;
}
