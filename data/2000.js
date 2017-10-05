{
  for (
    var _len7 = arguments.length,
      args = new Array(_len7 > 1 ? _len7 - 1 : 0),
      _key7 = 1;
    _key7 < _len7;
    _key7++
  ) {
    args[_key7 - 1] = arguments[_key7];
  }

  for (var i = 0; i < queue.length; i++) {
    queue[i].apply(queue, args);
  }
}
