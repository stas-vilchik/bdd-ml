{
  if (warnedForNaNValue) {
    return;
  }

  warnedForNaNValue = true;
  warning(
    false,
    "`NaN` is an invalid value for the `%s` css style property.%s",
    name,
    checkRenderMessage(owner)
  );
}
