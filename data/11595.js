{
  if (!this.started) {
    this.emit("beforeStart");
    this.start();
  }

  this.push(data);
  done();
}
