{
  var f = prototype[name];
  if (!f) return;

  newPrototype[name] = function() {
    if (!(wrap(this) instanceof CustomElementConstructor)) {
      rewrap(this);
    }

    f.apply(wrap(this), arguments);
  };
}
