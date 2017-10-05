{
  assert.isTrue(object.hasOwnProperty(name));
  var descriptor = Object.getOwnPropertyDescriptor(object, name);
  assert.equal("object", typeof descriptor);
  assert.isTrue(descriptor.enumerable);
  assert.equal("function", typeof object[name]);
  assert.isTrue(object[name].name === "" || object[name].name === undefined);
}
