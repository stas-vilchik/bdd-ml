{
  for (
    var _len6 = arguments.length, args = new Array(_len6), _key6 = 0;
    _key6 < _len6;
    _key6++
  ) {
    args[_key6] = arguments[_key6];
  }

  return function() {
    function b() {}

    console.log("Shouldn't args be from a's scope?", args);
  };
}
