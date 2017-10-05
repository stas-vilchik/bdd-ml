{
  var definition = getRegisteredDefinition(typeExtension || tag);

  if (definition) {
    if (tag == definition.tag && typeExtension == definition.is) {
      return new definition.ctor();
    }

    if (!typeExtension && !definition.is) {
      return new definition.ctor();
    }
  }

  var element;

  if (typeExtension) {
    element = createElement(tag);
    element.setAttribute("is", typeExtension);
    return element;
  }

  element = domCreateElement(tag);

  if (tag.indexOf("-") >= 0) {
    implementPrototype(element, HTMLElement);
  }

  return element;
}
