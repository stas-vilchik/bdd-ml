{
  ("use strict");

  return {
    setters: [],
    execute: function() {
      const { foo: bar, baz } = {};

      _export("bar", bar);

      _export("baz", baz);
    }
  };
}
