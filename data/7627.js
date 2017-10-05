{
  var rendered;

  while ((rendered = component._renderedComponent)) {
    component = rendered;
  }

  return component;
}
