{
  for (var i = 0; i < propertyNames.length; i++) {
    if (propertyNames[i] in object) return propertyNames[i];
  }
}
