{
  OriginalWindow.prototype[name] = function() {
    var w = wrap(this || window);
    return w[name].apply(w, arguments);
  };

  delete window[name];
}
