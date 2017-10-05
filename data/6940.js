{
  renderAllPending();
  return originalGetDefaultComputedStyle.call(
    unwrap(this),
    unwrapIfNeeded(el),
    pseudo
  );
}
