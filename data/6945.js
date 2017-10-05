{
  ("use strict");

  var unwrapIfNeeded = scope.unwrapIfNeeded;
  var originalSend = XMLHttpRequest.prototype.send;

  XMLHttpRequest.prototype.send = function(obj) {
    return originalSend.call(this, unwrapIfNeeded(obj));
  };
}
