{
  var loop = function(name) {
    if (!modules[name]) {
      modules[name] = {};
    }

    newModules[name].forEach(function(method) {
      if (typeof method === "string") {
        modules[name][method] = true;
      } else {
        modules[name][method.name] = method.args;
      }
    });
  };

  for (var name in newModules) loop(name);
}
