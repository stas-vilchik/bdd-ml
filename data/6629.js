{
  for (var child = this.firstChild; child; child = child.nextSibling) {
    child.nodeIsInserted_();
  }
}
