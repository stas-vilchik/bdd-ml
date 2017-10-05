{
  var flags = scope.flags;
  var modules = [];

  var addModule = function(module) {
    modules.push(module);
  };

  var initializeModules = function() {
    modules.forEach(function(module) {
      module(scope);
    });
  };

  scope.addModule = addModule;
  scope.initializeModules = initializeModules;
  scope.hasNative = Boolean(document.registerElement);
  scope.useNative =
    !flags.register &&
    scope.hasNative &&
    !window.ShadowDOMPolyfill &&
    (!window.HTMLImports || HTMLImports.useNative);
}
