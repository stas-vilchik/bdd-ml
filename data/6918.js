{
  renderAllPending();
  return new Selection(originalGetSelection.call(unwrap(this)));
}
