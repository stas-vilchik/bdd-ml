{
  if (inst._flags & Flags.hasCachedChildNodes) {
    return;
  }

  var children = inst._renderedChildren;
  var childNode = node.firstChild;

  outer: for (var name in children) {
    if (!children.hasOwnProperty(name)) {
      continue;
    }

    var childInst = children[name];

    var childID = getRenderedHostOrTextFromComponent(childInst)._domID;

    if (childID === 0) {
      continue;
    }

    for (; childNode !== null; childNode = childNode.nextSibling) {
      if (shouldPrecacheNode(childNode, childID)) {
        precacheNode(childInst, childNode);
        continue outer;
      }
    }

    invariant(false, "Unable to find element with ID %s.", childID);
  }

  inst._flags |= Flags.hasCachedChildNodes;
}
