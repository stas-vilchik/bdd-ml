{
  if (!callback) {
    return;
  }

  var rules;

  if (cssText.match("@import") && isChrome) {
    var style = cssTextToStyle(cssText);
    inFrame(function(doc) {
      doc.head.appendChild(style.impl);
      rules = Array.prototype.slice.call(style.sheet.cssRules, 0);
      callback(rules);
    });
  } else {
    rules = cssToRules(cssText);
    callback(rules);
  }
}
