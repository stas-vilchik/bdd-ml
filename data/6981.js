{
  var cssText = "@keyframes " + rule.name + " {";
  Array.prototype.forEach.call(rule.cssRules, function(rule) {
    cssText += " " + rule.keyText + " {" + rule.style.cssText + "}";
  });
  cssText += " }";
  return cssText;
}
