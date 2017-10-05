{
  var write = context.write;
  var next = context.next;
  var userContext = context.userContext;
  var Ctor = node.componentOptions.Ctor;
  var getKey = Ctor.options.serverCacheKey;
  var name = Ctor.options.name;
  var cache = context.cache;
  var registerComponent = registerComponentForCache(Ctor.options, write);

  if (isDef(getKey) && isDef(cache) && isDef(name)) {
    var key = name + "::" + getKey(node.componentOptions.propsData);
    var has = context.has;
    var get = context.get;

    if (isDef(has)) {
      has(key, function(hit) {
        if (hit === true && isDef(get)) {
          get(key, function(res) {
            if (isDef(registerComponent)) {
              registerComponent(userContext);
            }

            res.components.forEach(function(register) {
              return register(userContext);
            });
            write(res.html, next);
          });
        } else {
          renderComponentWithCache(node, isRoot, key, context);
        }
      });
    } else if (isDef(get)) {
      get(key, function(res) {
        if (isDef(res)) {
          if (isDef(registerComponent)) {
            registerComponent(userContext);
          }

          res.components.forEach(function(register) {
            return register(userContext);
          });
          write(res.html, next);
        } else {
          renderComponentWithCache(node, isRoot, key, context);
        }
      });
    }
  } else {
    if (isDef(getKey) && isUndef(cache)) {
      warnOnce(
        "[vue-server-renderer] Component " +
          (Ctor.options.name || "(anonymous)") +
          " implemented serverCacheKey, " +
          "but no cache was provided to the renderer."
      );
    }

    if (isDef(getKey) && isUndef(name)) {
      warnOnce(
        '[vue-server-renderer] Components that implement "serverCacheKey" ' +
          'must also define a unique "name" option.'
      );
    }

    renderComponentInner(node, isRoot, context);
  }
}
