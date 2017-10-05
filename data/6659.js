{
  var result = new HTMLCollection();
  var match = localName === "*" ? matchesEveryThing : matchesTagName;
  result.length = getElementsByTagNameFiltered.call(
    this,
    match,
    0,
    result,
    localName,
    localName.toLowerCase()
  );
  return result;
}
