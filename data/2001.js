{
  if (foo) {
    for (
      var _len8 = arguments.length,
        args = new Array(_len8 > 1 ? _len8 - 1 : 0),
        _key8 = 1;
      _key8 < _len8;
      _key8++
    ) {
      args[_key8 - 1] = arguments[_key8];
    }

    for (var i = 0; i < queue.length; i++) {
      queue[i].apply(queue, args);
    }
  }
}
