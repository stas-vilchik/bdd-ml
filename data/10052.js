{
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp;
  }

  if (isDef(factory.resolved)) {
    return factory.resolved;
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp;
  }

  if (isDef(factory.contexts)) {
    factory.contexts.push(context);
  } else {
    var contexts = (factory.contexts = [context]);
    var sync = true;

    var forceRender = function() {
      for (var i = 0, l = contexts.length; i < l; i++) {
        contexts[i].$forceUpdate();
      }
    };

    var resolve = once(function(res) {
      factory.resolved = ensureCtor(res, baseCtor);

      if (!sync) {
        forceRender();
      }
    });
    var reject = once(function(reason) {
      "development" !== "production" &&
        warn(
          "Failed to resolve async component: " +
            String(factory) +
            (reason ? "\nReason: " + reason : "")
        );

      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender();
      }
    });
    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (typeof res.then === "function") {
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (
        isDef(res.component) &&
        typeof res.component.then === "function"
      ) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);

          if (res.delay === 0) {
            factory.loading = true;
          } else {
            setTimeout(function() {
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender();
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          setTimeout(function() {
            if (isUndef(factory.resolved)) {
              reject("timeout (" + res.timeout + "ms)");
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    return factory.loading ? factory.loadingComp : factory.resolved;
  }
}
