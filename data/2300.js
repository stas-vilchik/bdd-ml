{
  return (() =>
    function() {
      return [].slice.call(arguments);
    }).call();
}
