{
  var owner;

  if (component) {
    owner = component._currentElement._owner;
  }

  if (name.indexOf("-") > -1) {
    warnHyphenatedStyleName(name, owner);
  } else if (badVendoredStyleNamePattern.test(name)) {
    warnBadVendoredStyleName(name, owner);
  } else if (badStyleValueWithSemicolonPattern.test(value)) {
    warnStyleValueWithSemicolon(name, value, owner);
  }

  if (typeof value === "number") {
    if (isNaN(value)) {
      warnStyleValueIsNaN(name, value, owner);
    } else if (!isFinite(value)) {
      warnStyleValueIsInfinity(name, value, owner);
    }
  }
}
