{
  if (isCustomComponent(type, props)) {
    return;
  }

  warnInvalidARIAProps(type, props, debugID);
}
