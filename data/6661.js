{
  var result = new HTMLCollection();
  var match = null;

  if (ns === "*") {
    match = localName === "*" ? matchesEveryThing : matchesLocalNameOnly;
  } else {
    match = localName === "*" ? matchesNameSpace : matchesLocalNameNS;
  }

  result.length = getElementsByTagNameNSFiltered.call(
    this,
    match,
    0,
    result,
    ns || null,
    localName
  );
  return result;
}
