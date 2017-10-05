{
  if (err) {
    return reject(err);
  }

  this.db = db;
  resolve(this);
}
