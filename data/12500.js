{
  var instance = instances[instanceId];

  if (instance && instance.app instanceof instance.Vue) {
    instance.document.destroy();
    instance.app.$destroy();
  }

  delete instances[instanceId];
}
