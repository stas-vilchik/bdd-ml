{
  if (list == null) return list;
  var wrapperList = new NodeList();

  for (var i = 0, length = list.length; i < length; i++) {
    wrapperList[i] = wrap(list[i]);
  }

  wrapperList.length = length;
  return wrapperList;
}
