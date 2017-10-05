{
  pending = false;
  var copies = callbacks.slice(0);
  callbacks = [];

  for (var i = 0; i < copies.length; i++) {
    (0, copies[i])();
  }
}
