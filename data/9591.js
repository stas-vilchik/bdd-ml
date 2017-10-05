{
  if (!Array.isArray(fn)) {
    return getType(fn) === getType(type);
  }

  for (var i = 0, len = fn.length; i < len; i++) {
    if (getType(fn[i]) === getType(type)) {
      return true;
    }
  }

  return false;
}
