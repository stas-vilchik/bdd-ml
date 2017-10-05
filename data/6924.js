{
  var implementation = implementationTable.get(this);
  if (implementation) return implementation;
  implementation = new DOMImplementation(unwrap(this).implementation);
  implementationTable.set(this, implementation);
  return implementation;
}
