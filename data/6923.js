{
  if (!node) {
    if (extendsOption) {
      return document.createElement(extendsOption, tagName);
    } else {
      return document.createElement(tagName);
    }
  }

  setWrapper(node, this);
}
