{
  for (let key in obj) {
    this._caseless.set(key, obj[key]);
  }

  return this;
}
