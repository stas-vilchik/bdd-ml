{
  var p = this.parentNode;

  while (p && p.nodeType !== Node.ELEMENT_NODE) {
    p = p.parentNode;
  }

  return p;
}
