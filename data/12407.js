{
  if (target.nodeType === 3) {
    if (node.type === "text") {
      node.setAttr("value", target.text);
      target.parentNode = node;
    } else {
      var text = createElement$1("text");
      text.setAttr("value", target.text);
      node.insertBefore(text, before);
    }

    return;
  }

  node.insertBefore(target, before);
}
