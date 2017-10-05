{
  return hasEval && isIdentifierName(name)
    ? new Function(
        "return this.__impl4cf1e782hg__." +
          name +
          ".apply(this.__impl4cf1e782hg__, arguments)"
      )
    : function() {
        return this.__impl4cf1e782hg__[name].apply(
          this.__impl4cf1e782hg__,
          arguments
        );
      };
}
