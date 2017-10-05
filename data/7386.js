{
  if (node[internalInstanceKey]) {
    return node[internalInstanceKey];
  }

  var parents = [];

  while (!node[internalInstanceKey]) {
    parents.push(node);

    if (node.parentNode) {
      node = node.parentNode;
    } else {
      return null;
    }
  }

  var closest;
  var inst = node[internalInstanceKey];

  if (inst.tag === HostComponent || inst.tag === HostText) {
    return inst;
  }

  for (; node && (inst = node[internalInstanceKey]); node = parents.pop()) {
    closest = inst;

    if (parents.length) {
      precacheChildNodes(inst, node);
    }
  }

  return closest;
}
