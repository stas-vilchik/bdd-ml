{
  var result = {};
  var mapKeys = Object.keys(targetObj);

  for (let i = 0; i < mapKeys.length; i++) {
    var originalKey = mapKeys[i];
    var originalVal = targetObj[originalKey];
    result[originalVal] = originalKey;
  }

  return result;
}
