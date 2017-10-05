{
  var renderer = new ReactPartialRenderer(element, false);
  var markup = renderer.read(Infinity);
  return markup;
}
