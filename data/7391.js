{
  if (typeof inst.tag === "number") {
    while (inst.return) {
      inst = inst.return;
    }

    if (inst.tag !== HostRoot) {
      return null;
    }

    return inst.stateNode.containerInfo;
  } else {
    while (inst._hostParent) {
      inst = inst._hostParent;
    }

    var rootNode = ReactDOMComponentTree.getNodeFromInstance(inst);
    return rootNode.parentNode;
  }
}
