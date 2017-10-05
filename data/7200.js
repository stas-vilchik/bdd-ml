{
  if (namespace === HTML_NAMESPACE) {
    return createElement(tag, typeExtension);
  } else {
    return domCreateElementNS(namespace, tag);
  }
}
