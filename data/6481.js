{
  getterDescriptor.get = getter;
  defineProperty(constructor.prototype, name, getterDescriptor);
}
