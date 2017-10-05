{
  ("use strict");

  var utils = __webpack_require__(2);

  var normalizeHeaderName = __webpack_require__(7);

  var DEFAULT_CONTENT_TYPE = {
    "Content-Type": "application/x-www-form-urlencoded"
  };

  function setContentTypeIfUnset(headers, value) {
    if (
      !utils.isUndefined(headers) &&
      utils.isUndefined(headers["Content-Type"])
    ) {
      headers["Content-Type"] = value;
    }
  }

  function getDefaultAdapter() {
    var adapter;

    if (typeof XMLHttpRequest !== "undefined") {
      adapter = __webpack_require__(8);
    } else if (typeof process !== "undefined") {
      adapter = __webpack_require__(8);
    }

    return adapter;
  }

  var defaults = {
    adapter: getDefaultAdapter(),
    transformRequest: [
      function transformRequest(data, headers) {
        normalizeHeaderName(headers, "Content-Type");

        if (
          utils.isFormData(data) ||
          utils.isArrayBuffer(data) ||
          utils.isBuffer(data) ||
          utils.isStream(data) ||
          utils.isFile(data) ||
          utils.isBlob(data)
        ) {
          return data;
        }

        if (utils.isArrayBufferView(data)) {
          return data.buffer;
        }

        if (utils.isURLSearchParams(data)) {
          setContentTypeIfUnset(
            headers,
            "application/x-www-form-urlencoded;charset=utf-8"
          );
          return data.toString();
        }

        if (utils.isObject(data)) {
          setContentTypeIfUnset(headers, "application/json;charset=utf-8");
          return JSON.stringify(data);
        }

        return data;
      }
    ],
    transformResponse: [
      function transformResponse(data) {
        if (typeof data === "string") {
          try {
            data = JSON.parse(data);
          } catch (e) {}
        }

        return data;
      }
    ],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    validateStatus: function validateStatus(status) {
      return status >= 200 && status < 300;
    }
  };
  defaults.headers = {
    common: {
      Accept: "application/json, text/plain, */*"
    }
  };
  utils.forEach(["delete", "get", "head"], function forEachMethodNoData(
    method
  ) {
    defaults.headers[method] = {};
  });
  utils.forEach(["post", "put", "patch"], function forEachMethodWithData(
    method
  ) {
    defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
  });
  module.exports = defaults;
}
