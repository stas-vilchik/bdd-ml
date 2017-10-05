{
  scope.renderAllPending();
  return unsafeUnwrap(this)[name].apply(unsafeUnwrap(this), arguments);
}
