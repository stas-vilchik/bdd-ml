{
  switch (node.localName) {
    case "content":
      return new HTMLContentElement(node);

    case "shadow":
      return new HTMLShadowElement(node);

    case "template":
      return new HTMLTemplateElement(node);
  }

  HTMLElement.call(this, node);
}
