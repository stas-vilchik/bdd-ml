{
  if (child.nodeType === 3) {
    if (node.type === "text") {
      node.setAttr("value", child.text);
      child.parentNode = node;
    } else {
      var text = createElement$1("text");
      text.setAttr("value", child.text);
      node.appendChild(text);
    }

    return;
  }

  node.appendChild(child);
}
