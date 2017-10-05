{
  if (!root) {
    return [];
  }

  var styles = root.querySelectorAll("style");
  return Array.prototype.filter.call(styles, function(s) {
    return !s.hasAttribute(NO_SHIM_ATTRIBUTE);
  });
}
