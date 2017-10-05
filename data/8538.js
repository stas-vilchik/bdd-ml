{
  if (isBuiltInModifier(key)) {
    warn("Avoid overwriting built-in modifier in config.keyCodes: ." + key);
    return false;
  } else {
    target[key] = value;
    return true;
  }
}
