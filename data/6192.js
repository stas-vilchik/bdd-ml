{
  try {
    original.apply(this, arguments);
  } catch (e) {
    global.__hadDevFailures = e.stack;
  }
}
