{
  try {
    this.next();
  } catch (e) {
    this.emit("error", e);
  }
}
