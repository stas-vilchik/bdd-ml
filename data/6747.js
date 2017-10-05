{
  HTMLElement.call(this, node);

  if (!OriginalHTMLTemplateElement) {
    var content = extractContent(node);
    contentTable.set(this, wrap(content));
  }
}
