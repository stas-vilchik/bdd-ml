{
  var useNative = scope.useNative;
  var initializeModules = scope.initializeModules;

  if (useNative) {
    var nop = function() {};

    scope.watchShadow = nop;
    scope.upgrade = nop;
    scope.upgradeAll = nop;
    scope.upgradeDocumentTree = nop;
    scope.upgradeSubtree = nop;
    scope.takeRecords = nop;

    scope.instanceof = function(obj, base) {
      return obj instanceof base;
    };
  } else {
    initializeModules();
  }

  var upgradeDocumentTree = scope.upgradeDocumentTree;

  if (!window.wrap) {
    if (window.ShadowDOMPolyfill) {
      window.wrap = ShadowDOMPolyfill.wrapIfNeeded;
      window.unwrap = ShadowDOMPolyfill.unwrapIfNeeded;
    } else {
      window.wrap = window.unwrap = function(node) {
        return node;
      };
    }
  }

  function bootstrap() {
    upgradeDocumentTree(wrap(document));

    if (window.HTMLImports) {
      HTMLImports.__importsParsingHook = function(elt) {
        upgradeDocumentTree(wrap(elt.import));
      };
    }

    CustomElements.ready = true;
    setTimeout(function() {
      CustomElements.readyTime = Date.now();

      if (window.HTMLImports) {
        CustomElements.elapsed =
          CustomElements.readyTime - HTMLImports.readyTime;
      }

      document.dispatchEvent(
        new CustomEvent("WebComponentsReady", {
          bubbles: true
        })
      );
    });
  }

  if (typeof window.CustomEvent !== "function") {
    window.CustomEvent = function(inType, params) {
      params = params || {};
      var e = document.createEvent("CustomEvent");
      e.initCustomEvent(
        inType,
        Boolean(params.bubbles),
        Boolean(params.cancelable),
        params.detail
      );
      return e;
    };

    window.CustomEvent.prototype = window.Event.prototype;
  }

  if (document.readyState === "complete" || scope.flags.eager) {
    bootstrap();
  } else if (
    document.readyState === "interactive" &&
    !window.attachEvent &&
    (!window.HTMLImports || window.HTMLImports.ready)
  ) {
    bootstrap();
  } else {
    var loadEvent =
      window.HTMLImports && !HTMLImports.ready
        ? "HTMLImportsLoaded"
        : "DOMContentLoaded";
    window.addEventListener(loadEvent, bootstrap);
  }
}
