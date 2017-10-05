{
  if (err) {
    this.log("Error writing config file.", err);
    reject();
  }

  resolve();
}
