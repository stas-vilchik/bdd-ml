{
  var unknownProps = [];

  for (var key in props) {
    var isValid = validateProperty(type, key, props[key], debugID);

    if (!isValid) {
      unknownProps.push(key);
    }
  }

  var unknownPropString = unknownProps.map(prop => "`" + prop + "`").join(", ");

  if (unknownProps.length === 1) {
    warning(
      false,
      "Invalid value for prop %s on <%s> tag. Either remove it from the element, " +
        "or pass a string or number value to keep it in the DOM. " +
        "For details, see https://fb.me/react-attribute-behavior%s",
      unknownPropString,
      type,
      getStackAddendum(debugID)
    );
  } else if (unknownProps.length > 1) {
    warning(
      false,
      "Invalid values for props %s on <%s> tag. Either remove them from the element, " +
        "or pass a string or number value to keep them in the DOM. " +
        "For details, see https://fb.me/react-attribute-behavior%s",
      unknownPropString,
      type,
      getStackAddendum(debugID)
    );
  }
}
