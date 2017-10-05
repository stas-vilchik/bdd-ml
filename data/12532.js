{
  var globalKeys = [];
  var globalValues = [];

  for (var key in globalObjects) {
    globalKeys.push(key);
    globalValues.push(globalObjects[key]);
  }

  globalKeys.push(body);
  var result = new (Function.prototype.bind.apply(
    Function,
    [null].concat(globalKeys)
  ))();
  return result.apply(void 0, globalValues);
}
