{
  var select = contentElement.getAttribute("select");
  if (!select) return true;
  select = select.trim();
  if (!select) return true;
  if (!(node instanceof Element)) return false;
  if (!selectorStartCharRe.test(select)) return false;

  try {
    return node.matches(select);
  } catch (ex) {
    return false;
  }
}
