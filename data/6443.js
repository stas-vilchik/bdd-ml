{
  var entry = key[this.name];
  if (!entry || entry[0] !== key) return false;
  entry[0] = entry[1] = undefined;
  return true;
}
