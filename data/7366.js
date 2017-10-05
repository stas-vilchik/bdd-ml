{
  if (hasOwnProperty.call(warnedProperties, name) && warnedProperties[name]) {
    return true;
  }

  if (EventPluginRegistry.registrationNameModules.hasOwnProperty(name)) {
    return true;
  }

  if (EventPluginRegistry.plugins.length === 0 && EVENT_NAME_REGEX.test(name)) {
    return true;
  }

  var lowerCasedName = name.toLowerCase();
  var registrationName = EventPluginRegistry.possibleRegistrationNames.hasOwnProperty(
    lowerCasedName
  )
    ? EventPluginRegistry.possibleRegistrationNames[lowerCasedName]
    : null;

  if (registrationName != null) {
    warning(
      false,
      "Invalid event handler property `%s`. Did you mean `%s`?%s",
      name,
      registrationName,
      getStackAddendum(debugID)
    );
    warnedProperties[name] = true;
    return true;
  }

  if (lowerCasedName.indexOf("on") === 0) {
    warning(
      false,
      "Unknown event handler property `%s`. It will be ignored.%s",
      name,
      getStackAddendum(debugID)
    );
    warnedProperties[name] = true;
    return true;
  }

  if (rARIA.test(name) || rARIACamel.test(name)) {
    return true;
  }

  if (lowerCasedName === "onfocusin" || lowerCasedName === "onfocusout") {
    warning(
      false,
      "React uses onFocus and onBlur instead of onFocusIn and onFocusOut. " +
        "All React events are normalized to bubble, so onFocusIn and onFocusOut " +
        "are not needed/supported by React."
    );
    warnedProperties[name] = true;
    return true;
  }

  if (lowerCasedName === "innerhtml") {
    warning(
      false,
      "Directly setting property `innerHTML` is not permitted. " +
        "For more information, lookup documentation on `dangerouslySetInnerHTML`."
    );
    warnedProperties[name] = true;
    return true;
  }

  if (lowerCasedName === "aria") {
    warning(
      false,
      "The `aria` attribute is reserved for future use in React. " +
        "Pass individual `aria-` attributes instead."
    );
    warnedProperties[name] = true;
    return true;
  }

  if (
    lowerCasedName === "is" &&
    value !== null &&
    value !== undefined &&
    typeof value !== "string"
  ) {
    warning(
      false,
      "Received a `%s` for string attribute `is`. If this is expected, cast " +
        "the value to a string.%s",
      typeof value,
      getStackAddendum(debugID)
    );
    warnedProperties[name] = true;
    return true;
  }

  if (typeof value === "number" && isNaN(value)) {
    warning(
      false,
      "Received NaN for numeric attribute `%s`. If this is expected, cast " +
        "the value to a string.%s",
      name,
      getStackAddendum(debugID)
    );
    warnedProperties[name] = true;
    return true;
  }

  const isReserved = DOMProperty.isReservedProp(name);

  if (possibleStandardNames.hasOwnProperty(lowerCasedName)) {
    var standardName = possibleStandardNames[lowerCasedName];

    if (standardName !== name) {
      warning(
        false,
        "Invalid DOM property `%s`. Did you mean `%s`?%s",
        name,
        standardName,
        getStackAddendum(debugID)
      );
      warnedProperties[name] = true;
      return true;
    }
  } else if (!isReserved && name !== lowerCasedName) {
    warning(
      false,
      "React does not recognize the `%s` prop on a DOM element. If you " +
        "intentionally want it to appear in the DOM as a custom " +
        "attribute, spell it as lowercase `%s` instead. " +
        "If you accidentally passed it from a parent component, remove " +
        "it from the DOM element.%s",
      name,
      lowerCasedName,
      getStackAddendum(debugID)
    );
    warnedProperties[name] = true;
    return true;
  }

  if (typeof value === "boolean") {
    warning(
      DOMProperty.shouldAttributeAcceptBooleanValue(name),
      "Received `%s` for non-boolean attribute `%s`. If this is expected, cast " +
        "the value to a string.%s",
      value,
      name,
      getStackAddendum(debugID)
    );
    warnedProperties[name] = true;
    return true;
  }

  if (isReserved) {
    return true;
  }

  if (!DOMProperty.shouldSetAttribute(name, value)) {
    warnedProperties[name] = true;
    return false;
  }

  return true;
}
