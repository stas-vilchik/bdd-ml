{
  if (appCode === void 0) appCode = "";
  if (config === void 0) config = {};
  if (env === void 0) env = {};
  var document = new renderer.Document(instanceId, config.bundleUrl);
  var instance = (instances[instanceId] = {
    instanceId: instanceId,
    config: config,
    data: data,
    document: document
  });
  var moduleGetter = genModuleGetter(instanceId);
  var timerAPIs = getInstanceTimer(instanceId, moduleGetter);
  var weexInstanceVar = {
    config: config,
    document: document,
    supports: supports,
    requireModule: moduleGetter
  };
  Object.freeze(weexInstanceVar);
  var Vue = (instance.Vue = createVueModuleInstance(instanceId, moduleGetter));
  var instanceVars = Object.assign(
    {
      Vue: Vue,
      weex: weexInstanceVar,
      __weex_require_module__: weexInstanceVar.requireModule
    },
    timerAPIs,
    env.services
  );

  if (!callFunctionNative(instanceVars, appCode)) {
    callFunction(instanceVars, appCode);
  }

  instance.document.taskCenter.send(
    "dom",
    {
      action: "createFinish"
    },
    []
  );
}
