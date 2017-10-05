{
  var token = new CancelToken(function() {});
  token.throwIfRequested();
}
