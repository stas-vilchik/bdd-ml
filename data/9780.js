{
  if (!inBrowser) {
    return true;
  }

  if (isReservedTag(tag)) {
    return false;
  }

  tag = tag.toLowerCase();

  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag];
  }

  var el = document.createElement(tag);

  if (tag.indexOf("-") > -1) {
    return (unknownElementCache[tag] =
      el.constructor === window.HTMLUnknownElement ||
      el.constructor === window.HTMLElement);
  } else {
    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(
      el.toString()
    ));
  }
}
