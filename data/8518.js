{
  var res = Object.create(parentVal || null);
  return childVal ? extend(res, childVal) : res;
}
