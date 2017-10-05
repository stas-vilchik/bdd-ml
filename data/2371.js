{
  var self = this;
  self.length = len;

  self[Symbol.iterator] = function*() {
    for (var i = 0; i < self.length; i++) {
      calledIterator++;
      yield self[i];
    }
  };
}
