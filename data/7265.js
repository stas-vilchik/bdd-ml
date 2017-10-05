{
  var renderer = new ReactPartialRenderer(element, true);
  var markup = renderer.read(Infinity);
  return markup;
}
