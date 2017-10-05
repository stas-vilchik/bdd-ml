{
  function GeneratedWrapper(node) {
    superWrapperConstructor.call(this, node);
  }

  var p = Object.create(superWrapperConstructor.prototype);
  p.constructor = GeneratedWrapper;
  GeneratedWrapper.prototype = p;
  return GeneratedWrapper;
}
