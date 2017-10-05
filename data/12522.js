{
  var nativeModule = modules[name] || [];
  var output = {};

  var loop = function(methodName) {
    Object.defineProperty(output, methodName, {
      enumerable: true,
      configurable: true,
      get: function proxyGetter() {
        return function() {
          var args = [],
            len = arguments.length;

          while (len--) args[len] = arguments[len];

          return instance.document.taskCenter.send(
            "module",
            {
              module: name,
              method: methodName
            },
            args
          );
        };
      },
      set: function proxySetter(val) {
        if (typeof val === "function") {
          return instance.document.taskCenter.send(
            "module",
            {
              module: name,
              method: methodName
            },
            [val]
          );
        }
      }
    });
  };

  for (var methodName in nativeModule) loop(methodName);

  return output;
}
