{
  var count = 0;

  for (
    var child = this.firstElementChild;
    child;
    child = child.nextElementSibling
  ) {
    count++;
  }

  return count;
}
