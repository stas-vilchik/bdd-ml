{
  if (typeof condition !== "string") {
    return null;
  }

  var res = condition.match(/^@(\w+)\/(\w+)(\.(\w+))?$/i);

  if (res) {
    var type = res[1];
    var name = res[2];
    var method = res[4];

    switch (type) {
      case "module":
        return isRegisteredModule(name, method);

      case "component":
        return isRegisteredComponent(name);
    }
  }

  return null;
}
