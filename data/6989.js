{
  if (selector.match(polyfillHostRe)) {
    selector = selector.replace(polyfillHostNoCombinator, scopeSelector);
    return selector.replace(polyfillHostRe, scopeSelector + " ");
  } else {
    return scopeSelector + " " + selector;
  }
}
