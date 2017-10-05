{
  ("use strict");

  var enhanceError = __webpack_require__(11);

  module.exports = function createError(
    message,
    config,
    code,
    request,
    response
  ) {
    var error = new Error(message);
    return enhanceError(error, config, code, request, response);
  };
}
