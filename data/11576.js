{
  if (isDef(res)) {
    if (isDef(registerComponent)) {
      registerComponent(userContext);
    }

    res.components.forEach(function(register) {
      return register(userContext);
    });
    write(res.html, next);
  } else {
    renderComponentWithCache(node, isRoot, key, context);
  }
}
