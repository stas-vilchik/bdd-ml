{
  if (child.nodeType === 3) {
    node.setAttr("value", "");
    return;
  }

  node.removeChild(child);
}
