{
  var cssText = rule.style.cssText;

  if (rule.style.content && !rule.style.content.match(/['"]+|attr/)) {
    cssText = cssText.replace(
      /content:[^;]*;/g,
      "content: '" + rule.style.content + "';"
    );
  }

  var style = rule.style;

  for (var i in style) {
    if (style[i] === "initial") {
      cssText += i + ": initial; ";
    }
  }

  return cssText;
}
