{
  return object && !isWrapper(object) ? wrap(object) : object;
}
