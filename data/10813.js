{
  if (vm.$root === vm) {
    return "<Root>";
  }

  var name =
    typeof vm === "string"
      ? vm
      : typeof vm === "function" && vm.options
        ? vm.options.name
        : vm._isVue ? vm.$options.name || vm.$options._componentTag : vm.name;
  var file = vm._isVue && vm.$options.__file;

  if (!name && file) {
    var match = file.match(/([^/\\]+)\.vue$/);
    name = match && match[1];
  }

  return (
    (name ? "<" + classify(name) + ">" : "<Anonymous>") +
    (file && includeFile !== false ? " at " + file : "")
  );
}
