{
  return hasEval && isIdentifierName(name)
    ? new Function("v", "this.__impl4cf1e782hg__." + name + " = v")
    : function(v) {
        this.__impl4cf1e782hg__[name] = v;
      };
}
