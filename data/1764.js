{
  ("use strict");

  function lazyLoadOperation() {
    return _context.import("./x").then(function(x) {
      x.y();
    });
  }

  _export("lazyLoadOperation", lazyLoadOperation);

  return {
    setters: [],
    execute: function() {}
  };
}
