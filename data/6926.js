{
  var original = document.implementation[name];

  constructor.prototype[name] = function() {
    return wrap(original.apply(unsafeUnwrap(this), arguments));
  };
}
