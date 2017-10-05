{
  if (hasPolyfillMutations) {
    deferMutation(function() {
      _detached(element);
    });
  } else {
    _detached(element);
  }
}
