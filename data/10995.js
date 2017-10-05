{
  if ("development" !== "production" && dir.modifiers) {
    warn("v-on without argument does not support modifiers.");
  }

  el.wrapListeners = function(code) {
    return "_g(" + code + "," + dir.value + ")";
  };
}
