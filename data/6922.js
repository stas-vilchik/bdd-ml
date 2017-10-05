{
  if (!(wrap(this) instanceof CustomElementConstructor)) {
    rewrap(this);
  }

  f.apply(wrap(this), arguments);
}
