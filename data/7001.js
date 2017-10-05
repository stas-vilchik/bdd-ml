{
  var style = cssTextToStyle(cssText);
  document.head.appendChild(style);
  var rules = [];

  if (style.sheet) {
    try {
      rules = style.sheet.cssRules;
    } catch (e) {}
  } else {
    console.warn("sheet not found", style);
  }

  style.parentNode.removeChild(style);
  return rules;
}
