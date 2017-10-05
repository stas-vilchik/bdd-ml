{
  ("use strict");

  var foo;
  return {
    setters: [
      function(_foo) {
        foo = _foo;
      }
    ],
    execute: function() {}
  };
}
