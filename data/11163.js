{
  var ref = vm.$options;
  var render = ref.render;
  var template = ref.template;
  var _scopeId = ref._scopeId;

  if (isUndef(render)) {
    if (template) {
      Object.assign(
        vm.$options,
        compileToFunctions(template, {
          scopeId: _scopeId
        })
      );
    } else {
      throw new Error(
        "render function or template not defined in component: " +
          (vm.$options.name || vm.$options._componentTag || "anonymous")
      );
    }
  }
}
