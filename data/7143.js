{
  initializeModules = scope.initializeModules;

  if (scope.useNative) {
    return;
  }

  if (typeof window.CustomEvent !== "function") {
    window.CustomEvent = function(inType, dictionary) {
      var e = document.createEvent("HTMLEvents");
      e.initEvent(
        inType,
        dictionary.bubbles === false ? false : true,
        dictionary.cancelable === false ? false : true,
        dictionary.detail
      );
      return e;
    };
  }

  initializeModules();
  var rootDocument = scope.rootDocument;

  function bootstrap() {
    HTMLImports.importer.bootDocument(rootDocument);
  }

  if (
    document.readyState === "complete" ||
    (document.readyState === "interactive" && !window.attachEvent)
  ) {
    bootstrap();
  } else {
    document.addEventListener("DOMContentLoaded", bootstrap);
  }
}
