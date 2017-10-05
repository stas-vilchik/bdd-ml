{
  var p = constructor.prototype;
  methodNames.forEach(function(name) {
    Object.defineProperty(p, name + "_", {
      value: p[name]
    });
  });
}
