{
  ("use strict");

  var utils = __webpack_require__(2);

  var bind = __webpack_require__(3);

  var Axios = __webpack_require__(5);

  var defaults = __webpack_require__(6);

  function createInstance(defaultConfig) {
    var context = new Axios(defaultConfig);
    var instance = bind(Axios.prototype.request, context);
    utils.extend(instance, Axios.prototype, context);
    utils.extend(instance, context);
    return instance;
  }

  var axios = createInstance(defaults);
  axios.Axios = Axios;

  axios.create = function create(instanceConfig) {
    return createInstance(utils.merge(defaults, instanceConfig));
  };

  axios.Cancel = __webpack_require__(23);
  axios.CancelToken = __webpack_require__(24);
  axios.isCancel = __webpack_require__(20);

  axios.all = function all(promises) {
    return Promise.all(promises);
  };

  axios.spread = __webpack_require__(25);
  module.exports = axios;
  module.exports.default = axios;
}
