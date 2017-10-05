{
  var instance = instances[instanceId];

  if (!instance || !(instance.app instanceof instance.Vue)) {
    return new Error("getRoot: instance " + instanceId + " not found!");
  }

  return instance.app.$el.toJSON();
}
