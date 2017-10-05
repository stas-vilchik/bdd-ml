{
  return function() {
    arguments[relatedTargetIndex] = unwrap(arguments[relatedTargetIndex]);
    var impl = unwrap(this);
    impl[name].apply(impl, arguments);
  };
}
