{
  ("use strict");

  var utils = __webpack_require__(2);

  var transformData = __webpack_require__(19);

  var isCancel = __webpack_require__(20);

  var defaults = __webpack_require__(6);

  function throwIfCancellationRequested(config) {
    if (config.cancelToken) {
      config.cancelToken.throwIfRequested();
    }
  }

  module.exports = function dispatchRequest(config) {
    throwIfCancellationRequested(config);
    config.headers = config.headers || {};
    config.data = transformData(
      config.data,
      config.headers,
      config.transformRequest
    );
    config.headers = utils.merge(
      config.headers.common || {},
      config.headers[config.method] || {},
      config.headers || {}
    );
    utils.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      function cleanHeaderConfig(method) {
        delete config.headers[method];
      }
    );
    var adapter = config.adapter || defaults.adapter;
    return adapter(config).then(
      function onAdapterResolution(response) {
        throwIfCancellationRequested(config);
        response.data = transformData(
          response.data,
          response.headers,
          config.transformResponse
        );
        return response;
      },
      function onAdapterRejection(reason) {
        if (!isCancel(reason)) {
          throwIfCancellationRequested(config);

          if (reason && reason.response) {
            reason.response.data = transformData(
              reason.response.data,
              reason.response.headers,
              config.transformResponse
            );
          }
        }

        return Promise.reject(reason);
      }
    );
  };
}
