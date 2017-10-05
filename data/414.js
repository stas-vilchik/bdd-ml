{
  var enumerator = this;
  var length = enumerator.length;
  var promise = enumerator.promise;
  var input = enumerator._input;

  for (
    var i = 0;
    promise._state === lib$es6$promise$$internal$$PENDING && i < length;
    i++
  ) {
    enumerator._eachEntry(input[i], i);
  }
}
