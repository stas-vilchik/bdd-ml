{
  if (!vm) {
    warn(
      'option "' +
        key +
        '" can only be used during instance ' +
        "creation with the `new` keyword."
    );
  }

  return defaultStrat(parent, child);
}
