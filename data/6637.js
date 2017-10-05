{
  var s = "";

  for (var child = this.firstChild; child; child = child.nextSibling) {
    if (child.nodeType != Node.COMMENT_NODE) {
      s += child.textContent;
    }
  }

  return s;
}
