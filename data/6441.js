{
  var entry = key[this.name];
  if (entry && entry[0] === key) entry[1] = value;
  else
    defineProperty(key, this.name, {
      value: [key, value],
      writable: true
    });
  return this;
}
