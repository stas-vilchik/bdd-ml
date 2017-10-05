{
  p = p.trim();

  if (this.selectorNeedsScoping(p, scopeSelector)) {
    p =
      strict && !p.match(polyfillHostNoCombinator)
        ? this.applyStrictSelectorScope(p, scopeSelector)
        : this.applySelectorScope(p, scopeSelector);
  }

  r.push(p);
}
