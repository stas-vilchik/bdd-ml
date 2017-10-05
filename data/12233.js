{
  var has = key in target;
  var isAllowed = allowedGlobals(key) || key.charAt(0) === "_";

  if (!has && !isAllowed) {
    warnNonPresent(target, key);
  }

  return has || !isAllowed;
}
