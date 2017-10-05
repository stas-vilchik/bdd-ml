{
  var dynamic = false;
  var styleResult = "";

  if (staticStyle) {
    var styleList = staticStyle
      .trim()
      .split(";")
      .map(function(style) {
        var result = style.trim().split(":");

        if (result.length !== 2) {
          return;
        }

        var key = normalize(result[0].trim());
        var value = result[1].trim();
        var dynamicValue = parseText(value, options.delimiters);

        if (dynamicValue) {
          dynamic = true;
          return key + ":" + dynamicValue.expression;
        }

        return key + ":" + JSON.stringify(value);
      })
      .filter(function(result) {
        return result;
      });

    if (styleList.length) {
      styleResult = "{" + styleList.join(",") + "}";
    }
  }

  return {
    dynamic: dynamic,
    styleResult: styleResult
  };
}
