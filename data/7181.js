{
  flags.upgrade && console.group("upgrade:", element.localName);

  if (definition.is) {
    element.setAttribute("is", definition.is);
  }

  implementPrototype(element, definition);
  element.__upgraded__ = true;
  created(element);
  scope.attachedNode(element);
  scope.upgradeSubtree(element);
  flags.upgrade && console.groupEnd();
  return element;
}
