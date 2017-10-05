{
  var names = getOwnPropertyNames(from);

  for (var i = 0; i < names.length; i++) {
    var name = names[i];
    defineProperty(to, name, getOwnPropertyDescriptor(from, name));
  }

  return to;
}
