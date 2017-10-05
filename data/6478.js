{
  return object && isWrapper(object) ? unwrap(object) : object;
}
