{
  var exports = {};
  VueFactory(exports, renderer);
  var Vue = exports.Vue;
  var instance = instances[instanceId];

  var isReservedTag =
    Vue.config.isReservedTag ||
    function() {
      return false;
    };

  Vue.config.isReservedTag = function(name) {
    return components[name] || isReservedTag(name);
  };

  Vue.prototype.$instanceId = instanceId;
  Vue.prototype.$document = instance.document;
  Vue.prototype.$requireWeexModule = moduleGetter;
  Vue.mixin({
    beforeCreate: function beforeCreate() {
      var options = this.$options;

      if (options.el) {
        var dataOption = options.data;
        var internalData =
          (typeof dataOption === "function" ? dataOption() : dataOption) || {};
        options.data = Object.assign(internalData, instance.data);
        instance.app = this;
      }
    }
  });

  Vue.prototype.$getConfig = function() {
    if (instance.app instanceof Vue) {
      return instance.config;
    }
  };

  return Vue;
}
