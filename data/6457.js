{
  return hasEval && isIdentifierName(name)
    ? new Function("return this.__impl4cf1e782hg__." + name)
    : function() {
        return this.__impl4cf1e782hg__[name];
      };
}
