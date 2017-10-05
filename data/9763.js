{
  var configDef = {};

  configDef.get = function() {
    return config;
  };

  if (process.env.NODE_ENV !== "production") {
    configDef.set = function() {
      warn(
        "Do not replace the Vue.config object, set individual fields instead."
      );
    };
  }

  Object.defineProperty(Vue, "config", configDef);
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };
  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;
  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function(type) {
    Vue.options[type + "s"] = Object.create(null);
  });
  Vue.options._base = Vue;
  extend(Vue.options.components, builtInComponents);
  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}
