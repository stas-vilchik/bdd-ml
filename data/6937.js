{
  renderAllPending();
  return originalGetComputedStyle.call(
    unwrap(this),
    unwrapIfNeeded(el),
    pseudo
  );
}
