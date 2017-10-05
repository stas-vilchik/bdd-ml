{
  var instance = instances[instanceId];

  if (!instance || !(instance.app instanceof instance.Vue)) {
    return new Error("refreshInstance: instance " + instanceId + " not found!");
  }

  for (var key in data) {
    instance.Vue.set(instance.app, key, data[key]);
  }

  instance.document.taskCenter.send(
    "dom",
    {
      action: "refreshFinish"
    },
    []
  );
}
