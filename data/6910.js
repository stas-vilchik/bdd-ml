{
  var original = document[name];

  Document.prototype[name] = function() {
    return wrap(original.apply(unsafeUnwrap(this), arguments));
  };
}
