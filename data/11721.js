{
  if (_isServer === undefined) {
    if (!inBrowser && typeof global !== "undefined") {
      _isServer = global["process"].env.VUE_ENV === "server";
    } else {
      _isServer = false;
    }
  }

  return _isServer;
}
