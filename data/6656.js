{
  var shimmed = shimSelector(selector);
  var deep = shimmed !== selector;
  selector = shimmed;
  var result = new NodeList();
  result.length = querySelectorAllFiltered.call(
    this,
    matchesSelector,
    0,
    result,
    selector,
    deep
  );
  return result;
}
