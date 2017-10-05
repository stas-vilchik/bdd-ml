{
  if (!handler) {
    return "function(){}";
  }

  if (Array.isArray(handler)) {
    return (
      "[" +
      handler
        .map(function(handler) {
          return genHandler(name, handler);
        })
        .join(",") +
      "]"
    );
  }

  var isMethodPath = simplePathRE.test(handler.value);
  var isFunctionExpression = fnExpRE.test(handler.value);

  if (!handler.modifiers) {
    return isMethodPath || isFunctionExpression
      ? handler.value
      : "function($event){" + handler.value + "}";
  } else {
    var code = "";
    var genModifierCode = "";
    var keys = [];

    for (var key in handler.modifiers) {
      if (modifierCode[key]) {
        genModifierCode += modifierCode[key];

        if (keyCodes[key]) {
          keys.push(key);
        }
      } else {
        keys.push(key);
      }
    }

    if (keys.length) {
      code += genKeyFilter(keys);
    }

    if (genModifierCode) {
      code += genModifierCode;
    }

    var handlerCode = isMethodPath
      ? handler.value + "($event)"
      : isFunctionExpression
        ? "(" + handler.value + ")($event)"
        : handler.value;
    return "function($event){" + code + handlerCode + "}";
  }
}
