{
  var channel = new MessageChannel();
  channel.port1.onmessage = lib$es6$promise$asap$$flush;
  return function() {
    channel.port2.postMessage(0);
  };
}
