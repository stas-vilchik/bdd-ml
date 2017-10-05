{
  var original = document.implementation[name];

  constructor.prototype[name] = function() {
    return original.apply(unsafeUnwrap(this), arguments);
  };
}
