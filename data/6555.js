{
  if (type instanceof OriginalEvent) setWrapper(type, this);
  else return wrap(constructEvent(OriginalEvent, name, type, options));
}
