{
  names.forEach(function(name) {
    constructor.prototype[name] = function() {
      var w = wrapIfNeeded(this);
      return w[name].apply(w, arguments);
    };
  });
}
