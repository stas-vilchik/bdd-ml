{
  if (isDef(registerComponent)) {
    registerComponent(userContext);
  }

  res.components.forEach(function(register) {
    return register(userContext);
  });
  write(res.html, next);
}
