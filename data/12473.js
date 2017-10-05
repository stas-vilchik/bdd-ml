{
  var data = {};
  var options = comp.$options;

  for (var key in options.propsData) {
    data[key] = comp[key];
  }

  var listeners = options._parentListeners;

  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }

  return data;
}
