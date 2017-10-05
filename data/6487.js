{
  var w = wrapIfNeeded(this);
  return w[name].apply(w, arguments);
}
