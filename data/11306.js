{
  var styleText = "";

  for (var key in style) {
    var value = style[key];
    var hyphenatedKey = hyphenate(key);

    if (Array.isArray(value)) {
      for (var i = 0, len = value.length; i < len; i++) {
        styleText += hyphenatedKey + ":" + value[i] + ";";
      }
    } else {
      styleText += hyphenatedKey + ":" + value + ";";
    }
  }

  return styleText;
}
