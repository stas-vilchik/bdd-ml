{
  return (
    (window.ShadowDOMPolyfill && window.ShadowDOMPolyfill.wrapIfNeeded(node)) ||
    node
  );
}
