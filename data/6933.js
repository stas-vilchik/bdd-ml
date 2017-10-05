{
  return wrap(this || window).getDefaultComputedStyle(
    unwrapIfNeeded(el),
    pseudo
  );
}
