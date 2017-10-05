{
  var wrappedItem = null;
  var root = null;

  for (var i = 0, length = list.length; i < length; i++) {
    wrappedItem = wrap(list[i]);

    if (!deep && (root = getTreeScope(wrappedItem).root)) {
      if (root instanceof scope.wrappers.ShadowRoot) {
        continue;
      }
    }

    result[index++] = wrappedItem;
  }

  return index;
}
