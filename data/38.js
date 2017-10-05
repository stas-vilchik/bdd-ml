{
  ("use strict");

  var defaults = __webpack_require__(6);

  var utils = __webpack_require__(2);

  var InterceptorManager = __webpack_require__(17);

  var dispatchRequest = __webpack_require__(18);

  var isAbsoluteURL = __webpack_require__(21);

  var combineURLs = __webpack_require__(22);

  function Axios(instanceConfig) {
    this.defaults = instanceConfig;
    this.interceptors = {
      request: new InterceptorManager(),
      response: new InterceptorManager()
    };
  }

  Axios.prototype.request = function request(config) {
    if (typeof config === "string") {
      config = utils.merge(
        {
          url: arguments[0]
        },
        arguments[1]
      );
    }

    config = utils.merge(
      defaults,
      this.defaults,
      {
        method: "get"
      },
      config
    );
    config.method = config.method.toLowerCase();

    if (config.baseURL && !isAbsoluteURL(config.url)) {
      config.url = combineURLs(config.baseURL, config.url);
    }

    var chain = [dispatchRequest, undefined];
    var promise = Promise.resolve(config);
    this.interceptors.request.forEach(function unshiftRequestInterceptors(
      interceptor
    ) {
      chain.unshift(interceptor.fulfilled, interceptor.rejected);
    });
    this.interceptors.response.forEach(function pushResponseInterceptors(
      interceptor
    ) {
      chain.push(interceptor.fulfilled, interceptor.rejected);
    });

    while (chain.length) {
      promise = promise.then(chain.shift(), chain.shift());
    }

    return promise;
  };

  utils.forEach(
    ["delete", "get", "head", "options"],
    function forEachMethodNoData(method) {
      Axios.prototype[method] = function(url, config) {
        return this.request(
          utils.merge(config || {}, {
            method: method,
            url: url
          })
        );
      };
    }
  );
  utils.forEach(["post", "put", "patch"], function forEachMethodWithData(
    method
  ) {
    Axios.prototype[method] = function(url, data, config) {
      return this.request(
        utils.merge(config || {}, {
          method: method,
          url: url,
          data: data
        })
      );
    };
  });
  module.exports = Axios;
}
