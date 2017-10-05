{
  var cssText = "";
  Array.prototype.forEach.call(styles, function(s) {
    cssText += s.textContent + "\n\n";
  });

  if (!preserveComments) {
    cssText = cssText.replace(cssCommentRe, "");
  }

  return cssText;
}
