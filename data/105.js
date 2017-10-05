{
  ("use strict");

  var utils = __webpack_require__(2);

  module.exports = function transformData(data, headers, fns) {
    utils.forEach(fns, function transform(fn) {
      data = fn(data, headers);
    });
    return data;
  };
}
