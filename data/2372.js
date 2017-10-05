{
  for (var i = 0; i < self.length; i++) {
    calledIterator++;
    yield self[i];
  }
}