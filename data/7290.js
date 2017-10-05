{
  var style = node.style;

  for (var styleName in styles) {
    if (!styles.hasOwnProperty(styleName)) {
      continue;
    }

    var isCustomProperty = styleName.indexOf("--") === 0;

    if (__DEV__) {
      if (!isCustomProperty) {
        warnValidStyle(styleName, styles[styleName], component);
      }
    }

    var styleValue = dangerousStyleValue(
      styleName,
      styles[styleName],
      isCustomProperty
    );

    if (styleName === "float") {
      styleName = "cssFloat";
    }

    if (isCustomProperty) {
      style.setProperty(styleName, styleValue);
    } else if (styleValue) {
      style[styleName] = styleValue;
    } else {
      style[styleName] = "";
    }
  }
}
