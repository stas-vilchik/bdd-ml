{
  if (parentVal === nativeWatch) {
    parentVal = undefined;
  }

  if (childVal === nativeWatch) {
    childVal = undefined;
  }

  if (!childVal) {
    return Object.create(parentVal || null);
  }

  if (!parentVal) {
    return childVal;
  }

  var ret = {};
  extend(ret, parentVal);

  for (var key in childVal) {
    var parent = ret[key];
    var child = childVal[key];

    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }

    ret[key] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }

  return ret;
}
