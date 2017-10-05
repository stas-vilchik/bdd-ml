{
  if (typeof renderer.compileBundle !== "function") {
    return false;
  }

  var fn = void 0;
  var isNativeCompileOk = false;
  var script = "(function (";
  var globalKeys = [];
  var globalValues = [];

  for (var key in globalObjects) {
    globalKeys.push(key);
    globalValues.push(globalObjects[key]);
  }

  for (var i = 0; i < globalKeys.length - 1; ++i) {
    script += globalKeys[i];
    script += ",";
  }

  script += globalKeys[globalKeys.length - 1];
  script += ") {";
  script += body;
  script += "} )";

  try {
    var weex = globalObjects.weex || {};
    var config = weex.config || {};
    fn = renderer.compileBundle(
      script,
      config.bundleUrl,
      config.bundleDigest,
      config.codeCachePath
    );

    if (fn && typeof fn === "function") {
      fn.apply(void 0, globalValues);
      isNativeCompileOk = true;
    }
  } catch (e) {
    console.error(e);
  }

  return isNativeCompileOk;
}
