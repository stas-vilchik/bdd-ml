{
  var el = node.firstElementChild;

  while (el) {
    if (p(el, arg0, arg1)) result[index++] = el;
    index = findElements(el, index, result, p, arg0, arg1);
    el = el.nextElementSibling;
  }

  return index;
}
