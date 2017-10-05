{
  for (var propName in propTypes) {
    if (propTypes.hasOwnProperty(propName)) {
      var error = propTypes[propName](
        props,
        propName,
        tagName,
        "prop",
        null,
        ReactPropTypesSecret
      );
    }

    if (error instanceof Error && !(error.message in loggedTypeFailures)) {
      loggedTypeFailures[error.message] = true;
      warning(false, "Failed form propType: %s%s", error.message, getStack());
    }
  }
}
