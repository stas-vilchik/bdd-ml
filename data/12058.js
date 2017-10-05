{
  if (process.env.NODE_ENV !== "production" && dir.modifiers) {
    warn$1("v-on without argument does not support modifiers.");
  }

  el.wrapListeners = function(code) {
    return "_g(" + code + "," + dir.value + ")";
  };
}
