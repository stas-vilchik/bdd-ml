{
  ("use strict");

  return {
    setters: [],
    execute: function() {
      class Foo {}

      _export("default", Foo);
    }
  };
}
