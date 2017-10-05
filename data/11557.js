{
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}
