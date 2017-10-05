{
  if (hasPolyfillMutations) {
    deferMutation(function() {
      _attached(element);
    });
  } else {
    _attached(element);
  }
}
