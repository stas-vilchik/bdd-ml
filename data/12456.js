{
  var res =
    arguments.length === 1 ? oldHandler(ev) : oldHandler.apply(null, arguments);

  if (res !== null) {
    remove$2(event, null, null, _target);
  }
}
