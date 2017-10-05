{
  const fn = () => {};

  Object.defineProperty(fn, "name", {
    value: name
  });
  return moduleMocker.generateFromMetadata(moduleMocker.getMetadata(fn));
}
