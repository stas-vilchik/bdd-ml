{
  for (var i = 0; i < shadowDOMSelectorsRe.length; i++) {
    cssText = cssText.replace(shadowDOMSelectorsRe[i], " ");
  }

  return cssText;
}
