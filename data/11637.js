{
  if (isPlainObject(val)) {
    var res = {};

    for (var key in val) {
      res[key] = deepClone(val[key]);
    }

    return res;
  } else if (Array.isArray(val)) {
    return val.slice();
  } else {
    return val;
  }
}
