{
  if (rule.selectorText && rule.style && rule.style.cssText !== undefined) {
    cssText +=
      this.scopeSelector(rule.selectorText, scopeSelector, this.strictStyling) +
      " {\n	";
    cssText += this.propertiesFromRule(rule) + "\n}\n\n";
  } else if (rule.type === CSSRule.MEDIA_RULE) {
    cssText += "@media " + rule.media.mediaText + " {\n";
    cssText += this.scopeRules(rule.cssRules, scopeSelector);
    cssText += "\n}\n\n";
  } else {
    try {
      if (rule.cssText) {
        cssText += rule.cssText + "\n\n";
      }
    } catch (x) {
      if (rule.type === CSSRule.KEYFRAMES_RULE && rule.cssRules) {
        cssText += this.ieSafeCssTextFromKeyFrameRule(rule);
      }
    }
  }
}
