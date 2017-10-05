{
  scopeSelector = scopeSelector.replace(/\[/g, "\\[").replace(/\[/g, "\\]");
  return new RegExp("^(" + scopeSelector + ")" + selectorReSuffix, "m");
}
