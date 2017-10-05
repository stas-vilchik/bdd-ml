{
  var index1 = current.length;
  var index2 = old.length;
  var count = 0;

  while (count < searchLength && this.equals(current[--index1], old[--index2]))
    count++;

  return count;
}
