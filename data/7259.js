{
  try {
    this.push(this.partialRenderer.read(size));
  } catch (err) {
    this.emit("error", err);
  }
}
