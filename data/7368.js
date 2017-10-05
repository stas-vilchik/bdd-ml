{
  if (isCustomComponent(type, props)) {
    return;
  }

  warnUnknownProperties(type, props, debugID);
}
