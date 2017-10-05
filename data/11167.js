{
  if (hit === true && isDef(get)) {
    get(key, function(res) {
      if (isDef(registerComponent)) {
        registerComponent(userContext);
      }

      res.components.forEach(function(register) {
        return register(userContext);
      });
      write(res.html, next);
    });
  } else {
    renderComponentWithCache(node, isRoot, key, context);
  }
}
