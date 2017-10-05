{
  if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
    return;
  }

  warnedStyleNames[name] = true;
  warning(
    false,
    "Unsupported vendor-prefixed style property %s. Did you mean %s?%s",
    name,
    name.charAt(0).toUpperCase() + name.slice(1),
    checkRenderMessage(owner)
  );
}
