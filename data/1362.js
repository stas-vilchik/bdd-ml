{
  if (err) {
    return reject(err);
  }

  _this.db = db;
  resolve(_this);
}
