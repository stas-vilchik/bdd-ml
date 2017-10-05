{
  var inst = node[internalInstanceKey];

  if (inst) {
    if (inst.tag === HostComponent || inst.tag === HostText) {
      return inst;
    } else if (inst._hostNode === node) {
      return inst;
    } else {
      return null;
    }
  }

  inst = getClosestInstanceFromNode(node);

  if (inst != null && inst._hostNode === node) {
    return inst;
  } else {
    return null;
  }
}
