{
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
}
