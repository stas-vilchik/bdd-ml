{
  var w = wrap(this || window);
  return w[name].apply(w, arguments);
}
