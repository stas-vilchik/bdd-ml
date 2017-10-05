{
  var scopeStyles = this.prepareRoot(root, name, extendsName);
  var typeExtension = this.isTypeExtension(extendsName);
  var scopeSelector = this.makeScopeSelector(name, typeExtension);
  var cssText = stylesToCssText(scopeStyles, true);
  cssText = this.scopeCssText(cssText, scopeSelector);

  if (root) {
    root.shimmedStyle = cssText;
  }

  this.addCssToDocument(cssText, name);
}
