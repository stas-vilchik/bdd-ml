{
  function n(n) {
    var r = arguments.length;
    return r ? (r > 1 ? t.apply(e, arguments) : t.call(e, n)) : t.call(e);
  }

  return (n._length = t.length), n;
}
