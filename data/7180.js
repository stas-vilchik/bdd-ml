{
  if (!node.__upgraded__ && node.nodeType === Node.ELEMENT_NODE) {
    var is = node.getAttribute("is");
    var definition = scope.getRegisteredDefinition(is || node.localName);

    if (definition) {
      if (is && definition.tag == node.localName) {
        return upgradeWithDefinition(node, definition);
      } else if (!is && !definition.extends) {
        return upgradeWithDefinition(node, definition);
      }
    }
  }
}
