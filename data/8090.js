{
  var keyCodes = config.keyCodes[key] || builtInAlias;

  if (Array.isArray(keyCodes)) {
    return keyCodes.indexOf(eventKeyCode) === -1;
  } else {
    return keyCodes !== eventKeyCode;
  }
}
