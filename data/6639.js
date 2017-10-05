{
  var wrapperList = new NodeList();
  var i = 0;

  for (var child = this.firstChild; child; child = child.nextSibling) {
    wrapperList[i++] = child;
  }

  wrapperList.length = i;
  return wrapperList;
}
