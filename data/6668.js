{
  var wrapperList = new NodeList();
  var i = 0;

  for (
    var child = this.firstElementChild;
    child;
    child = child.nextElementSibling
  ) {
    wrapperList[i++] = child;
  }

  wrapperList.length = i;
  return wrapperList;
}
