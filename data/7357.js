{
  const invalidProps = [];

  for (var key in props) {
    var isValid = validateProperty(type, key, debugID);

    if (!isValid) {
      invalidProps.push(key);
    }
  }

  const unknownPropString = invalidProps
    .map(prop => "`" + prop + "`")
    .join(", ");

  if (invalidProps.length === 1) {
    warning(
      false,
      "Invalid aria prop %s on <%s> tag. " +
        "For details, see https://fb.me/invalid-aria-prop%s",
      unknownPropString,
      type,
      getStackAddendum(debugID)
    );
  } else if (invalidProps.length > 1) {
    warning(
      false,
      "Invalid aria props %s on <%s> tag. " +
        "For details, see https://fb.me/invalid-aria-prop%s",
      unknownPropString,
      type,
      getStackAddendum(debugID)
    );
  }
}
