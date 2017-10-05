{
  if (cssText.match("@import")) {
    addOwnSheet(cssText, name);
  } else {
    addCssToDocument(cssText);
  }
}
