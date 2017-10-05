{
  scope.renderAllPending();
  var element = wrap(
    originalElementFromPoint.call(unsafeUnwrap(document), x, y)
  );
  if (!element) return null;
  var path = getEventPath(element, null);
  var idx = path.lastIndexOf(self);
  if (idx == -1) return null;
  else path = path.slice(0, idx);
  return eventRetargetting(path, self);
}
