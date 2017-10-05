{
  for (var i = 0; i < arguments.length; i++) {
    return i < 0 || arguments.length <= i ? undefined : arguments[i];
  }
}
