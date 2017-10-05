{
  if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
    return;
  }

  warnedStyleNames[name] = true;
  warning(
    false,
    "Unsupported style property %s. Did you mean %s?%s",
    name,
    camelizeStyleName(name),
    checkRenderMessage(owner)
  );
}
