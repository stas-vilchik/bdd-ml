{
  var used = {};
  var p = inSrc;

  while (p !== inNative && p !== HTMLElement.prototype) {
    var keys = Object.getOwnPropertyNames(p);

    for (var i = 0, k; (k = keys[i]); i++) {
      if (!used[k]) {
        Object.defineProperty(
          inTarget,
          k,
          Object.getOwnPropertyDescriptor(p, k)
        );
        used[k] = 1;
      }
    }

    p = Object.getPrototypeOf(p);
  }
}
