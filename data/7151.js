{
  var e = node.firstElementChild;

  if (!e) {
    e = node.firstChild;

    while (e && e.nodeType !== Node.ELEMENT_NODE) {
      e = e.nextSibling;
    }
  }

  while (e) {
    if (find(e, data) !== true) {
      findAllElements(e, find, data);
    }

    e = e.nextElementSibling;
  }

  return null;
}
