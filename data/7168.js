{
  var p = element;
  var doc = wrap(document);

  while (p) {
    if (p == doc) {
      return true;
    }

    p = p.parentNode || p.host;
  }
}
