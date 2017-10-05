{
  var n = elt;

  while (n.ownerDocument.__importLink) {
    n = n.ownerDocument.__importLink;
  }

  return n;
}
