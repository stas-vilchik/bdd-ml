{
  ("use strict");

  return {
    setters: [],
    execute: function() {
      _export("foo", foo);

      _export("bar", bar);
    }
  };
}
