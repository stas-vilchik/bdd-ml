{
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
}
