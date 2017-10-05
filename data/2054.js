{
  var foo = function() {
    return bar.apply(void 0, arguments);
  };

  foo.apply(void 0, arguments);
}
