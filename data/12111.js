{
  var dynamic = false;
  var classResult = "";

  if (staticClass) {
    var classList = staticClass
      .trim()
      .split(" ")
      .map(function(name) {
        var result = parseText(name, options.delimiters);

        if (result) {
          dynamic = true;
          return result.expression;
        }

        return JSON.stringify(name);
      });

    if (classList.length) {
      classResult = "[" + classList.join(",") + "]";
    }
  }

  return {
    dynamic: dynamic,
    classResult: classResult
  };
}
