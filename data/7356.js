{
  if (hasOwnProperty.call(warnedProperties, name) && warnedProperties[name]) {
    return true;
  }

  if (rARIACamel.test(name)) {
    var ariaName = "aria-" + name.slice(4).toLowerCase();
    var correctName = validAriaProperties.hasOwnProperty(ariaName)
      ? ariaName
      : null;

    if (correctName == null) {
      warning(
        false,
        "Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.%s",
        name,
        getStackAddendum(debugID)
      );
      warnedProperties[name] = true;
      return true;
    }

    if (name !== correctName) {
      warning(
        false,
        "Invalid ARIA attribute `%s`. Did you mean `%s`?%s",
        name,
        correctName,
        getStackAddendum(debugID)
      );
      warnedProperties[name] = true;
      return true;
    }
  }

  if (rARIA.test(name)) {
    var lowerCasedName = name.toLowerCase();
    var standardName = validAriaProperties.hasOwnProperty(lowerCasedName)
      ? lowerCasedName
      : null;

    if (standardName == null) {
      warnedProperties[name] = true;
      return false;
    }

    if (name !== standardName) {
      warning(
        false,
        "Unknown ARIA attribute `%s`. Did you mean `%s`?%s",
        name,
        standardName,
        getStackAddendum(debugID)
      );
      warnedProperties[name] = true;
      return true;
    }
  }

  return true;
}
