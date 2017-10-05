{
  Object.defineProperty(this, "bar", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: foo
  });
}
