{
  MongoClient.connect(config.mongodb, (err, db) => {
    if (err) {
      return reject(err);
    }

    this.db = db;
    resolve(this);
  });
}
