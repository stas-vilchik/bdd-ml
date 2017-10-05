{
  var evaluate = compileModule(files, basedir, runInNewContext);

  if (runInNewContext !== false && runInNewContext !== "once") {
    return function(userContext) {
      if (userContext === void 0) userContext = {};
      return new Promise(function(resolve) {
        userContext._registeredComponents = new Set();
        var res = evaluate(entry, createSandbox(userContext));
        resolve(typeof res === "function" ? res(userContext) : res);
      });
    };
  } else {
    var runner;
    var initialContext;
    return function(userContext) {
      if (userContext === void 0) userContext = {};
      return new Promise(function(resolve) {
        if (!runner) {
          var sandbox = runInNewContext === "once" ? createSandbox() : global;
          initialContext = sandbox.__VUE_SSR_CONTEXT__ = {};
          runner = evaluate(entry, sandbox);
          delete sandbox.__VUE_SSR_CONTEXT__;

          if (typeof runner !== "function") {
            throw new Error(
              "bundle export should be a function when using " +
                "{ runInNewContext: false }."
            );
          }
        }

        userContext._registeredComponents = new Set();

        if (initialContext._styles) {
          userContext._styles = deepClone(initialContext._styles);
          var renderStyles = initialContext._renderStyles;

          if (renderStyles) {
            Object.defineProperty(userContext, "styles", {
              enumerable: true,
              get: function get() {
                return renderStyles(userContext._styles);
              }
            });
          }
        }

        resolve(runner(userContext));
      });
    };
  }
}
