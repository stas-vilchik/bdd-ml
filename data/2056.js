{
  var foo = function() {
    return bar.apply(void 0, arguments);
  };

  foo([]);
}
