{
  var enumerator = this;
  var c = enumerator._instanceConstructor;

  if (lib$es6$promise$utils$$isMaybeThenable(entry)) {
    if (
      entry.constructor === c &&
      entry._state !== lib$es6$promise$$internal$$PENDING
    ) {
      entry._onerror = null;

      enumerator._settledAt(entry._state, i, entry._result);
    } else {
      enumerator._willSettleAt(c.resolve(entry), i);
    }
  } else {
    enumerator._remaining--;
    enumerator._result[i] = entry;
  }
}
