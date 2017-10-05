{
  if (callback) {
    callback(e);
  }

  self.markParsingComplete(elt);
  self.parseNext();
}
