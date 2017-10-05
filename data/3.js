{
  if (installedModules[moduleId]) return installedModules[moduleId].exports;
  var module = (installedModules[moduleId] = {
    exports: {},
    id: moduleId,
    loaded: false
  });
  modules[moduleId].call(
    module.exports,
    module,
    module.exports,
    __webpack_require__
  );
  module.loaded = true;
  return module.exports;
}
