{
  return Array.isArray(selectorScope)
    ? this.applySelectorScopeList(selector, selectorScope)
    : this.applySimpleSelectorScope(selector, selectorScope);
}
