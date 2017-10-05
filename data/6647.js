{
  var m,
    el = node.firstElementChild;

  while (el) {
    if (el.matches(selector)) return el;
    m = findOne(el, selector);
    if (m) return m;
    el = el.nextElementSibling;
  }

  return null;
}
