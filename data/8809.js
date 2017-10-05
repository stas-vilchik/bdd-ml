{
  var value = elm.value;
  var modifiers = elm._vModifiers;

  if (isDef(modifiers) && modifiers.number) {
    return toNumber(value) !== toNumber(newVal);
  }

  if (isDef(modifiers) && modifiers.trim) {
    return value.trim() !== newVal.trim();
  }

  return value !== newVal;
}
