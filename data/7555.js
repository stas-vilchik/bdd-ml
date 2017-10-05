{
  if (warnedStyleValues.hasOwnProperty(value) && warnedStyleValues[value]) {
    return;
  }

  warnedStyleValues[value] = true;
  warning(
    false,
    "Style property values shouldn't contain a semicolon.%s " +
      'Try "%s: %s" instead.',
    checkRenderMessage(owner),
    name,
    value.replace(badStyleValueWithSemicolonPattern, "")
  );
}
