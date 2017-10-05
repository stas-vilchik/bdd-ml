{
  if (warnedForInfinityValue) {
    return;
  }

  warnedForInfinityValue = true;
  warning(
    false,
    "`Infinity` is an invalid value for the `%s` css style property.%s",
    name,
    checkRenderMessage(owner)
  );
}
