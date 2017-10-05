{
  try {
    this.render(this.write, this.end);
  } catch (e) {
    this.emit("error", e);
  }
}
