{
  try {
    this.parse(input);
  } catch (e) {
    return e.stack;
  }
}
