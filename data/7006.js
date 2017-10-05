{
  for (var i = 0, css = []; i < cssRules.length; i++) {
    css.push(cssRules[i].cssText);
  }

  return css.join("\n\n");
}
