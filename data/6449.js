{
  var names = getOwnPropertyNames(from);

  for (var i = 0; i < names.length; i++) {
    var name = names[i];

    switch (name) {
      case "arguments":
      case "caller":
      case "length":
      case "name":
      case "prototype":
      case "toString":
        continue;
    }

    defineProperty(to, name, getOwnPropertyDescriptor(from, name));
  }

  return to;
}
