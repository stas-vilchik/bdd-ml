{
  var index = -1;
  var length = array.length;

  while (++index < length) {
    if (array[index] == value) {
      return true;
    }
  }

  return false;
}
