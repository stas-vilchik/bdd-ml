{
  if (node.nodeType === TEXT_NODE) {
    node.nodeValue = text;
    return;
  }

  setInnerHTML(node, escapeTextContentForBrowser(text));
}
