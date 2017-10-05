{
  return function() {
    scope.renderAllPending();
    return unsafeUnwrap(this)[name];
  };
}
