{
  var list = new TouchList();

  for (var i = 0; i < nativeTouchList.length; i++) {
    list[i] = new Touch(nativeTouchList[i]);
  }

  list.length = i;
  return list;
}
