{
  if (inject) {
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject).filter(function(key) {
          return Object.getOwnPropertyDescriptor(inject, key).enumerable;
        })
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var provideKey = inject[key];
      var source = vm;

      while (source) {
        if (source._provided && provideKey in source._provided) {
          result[key] = source._provided[provideKey];
          break;
        }

        source = source.$parent;
      }

      if ("development" !== "production" && !source) {
        warn('Injection "' + key + '" not found', vm);
      }
    }

    return result;
  }
}
