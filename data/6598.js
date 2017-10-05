{
  wrapperConstructor.prototype[name] = function() {
    return wrapNodeList(
      unsafeUnwrap(this)[name].apply(unsafeUnwrap(this), arguments)
    );
  };
}
