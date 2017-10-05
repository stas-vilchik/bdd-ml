{
  ("use strict");

  return {
    setters: [],
    execute: function() {
      const { foo, bar = 1 } = {};

      _export("foo", foo);

      _export("bar", bar);
    }
  };
}
