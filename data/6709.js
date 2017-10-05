{
  switch (node.nodeType) {
    case Node.ELEMENT_NODE:
      var tagName = node.tagName.toLowerCase();
      var s = "<" + tagName;
      var attrs = node.attributes;

      for (var i = 0, attr; (attr = attrs[i]); i++) {
        s += " " + attr.name + '="' + escapeAttr(attr.value) + '"';
      }

      s += ">";
      if (voidElements[tagName]) return s;
      return s + getInnerHTML(node) + "</" + tagName + ">";

    case Node.TEXT_NODE:
      var data = node.data;
      if (parentNode && plaintextParents[parentNode.localName]) return data;
      return escapeData(data);

    case Node.COMMENT_NODE:
      return "<!--" + node.data + "-->";

    default:
      console.error(node);
      throw new Error("not implemented");
  }
}
