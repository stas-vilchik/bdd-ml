{
  node = wrap(node);

  if (!node) {
    node = wrap(document);
  }

  while (node.parentNode) {
    node = node.parentNode;
  }

  var observer = node.__observer;

  if (observer) {
    handler(observer.takeRecords());
    takeMutations();
  }
}
