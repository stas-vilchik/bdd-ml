{
  scope.consumeDeclarations = function() {
    throw "Possible attempt to load Polymer twice";
  };

  if (callback) {
    callback(elementDeclarations);
  }

  elementDeclarations = null;
}
