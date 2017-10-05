{
  var result = [],
    i = 0;

  for (var child = node.firstChild; child; child = child.nextSibling) {
    result[i++] = child;
  }

  return result;
}
