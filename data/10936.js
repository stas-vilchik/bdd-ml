{
  if (!options) {
    return defaults;
  }

  var result = {};
  var key;

  for (key in defaults) {
    result[key] = has(options, key) ? options[key] : defaults[key];
  }

  return result;
}
