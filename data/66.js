{
  ("use strict");

  var createError = __webpack_require__(10);

  module.exports = function settle(resolve, reject, response) {
    var validateStatus = response.config.validateStatus;

    if (
      !response.status ||
      !validateStatus ||
      validateStatus(response.status)
    ) {
      resolve(response);
    } else {
      reject(
        createError(
          "Request failed with status code " + response.status,
          response.config,
          null,
          response.request,
          response
        )
      );
    }
  };
}
