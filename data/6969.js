{
  var unscoped = this.extractUnscopedRulesFromCssText(cssText);
  cssText = this.insertPolyfillHostInCssText(cssText);
  cssText = this.convertColonHost(cssText);
  cssText = this.convertColonHostContext(cssText);
  cssText = this.convertShadowDOMSelectors(cssText);

  if (scopeSelector) {
    var self = this,
      cssText;
    withCssRules(cssText, function(rules) {
      cssText = self.scopeRules(rules, scopeSelector);
    });
  }

  cssText = cssText + "\n" + unscoped;
  return cssText.trim();
}
