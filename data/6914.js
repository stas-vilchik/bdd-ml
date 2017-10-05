{
  var oldShadowRoot = shadowRoot.olderShadowRoot;
  if (oldShadowRoot) doc.adoptNode(oldShadowRoot);
}
