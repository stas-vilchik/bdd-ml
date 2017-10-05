{
  if (!vm) {
    warn$1(
      'option "' +
        key +
        '" can only be used during instance ' +
        "creation with the `new` keyword."
    );
  }

  return defaultStrat(parent, child);
}
