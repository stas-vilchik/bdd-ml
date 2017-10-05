{
  if (inst.tag === HostComponent || inst.tag === HostText) {
    return inst.stateNode;
  }

  invariant(
    inst._hostNode !== undefined,
    "getNodeFromInstance: Invalid argument."
  );

  if (inst._hostNode) {
    return inst._hostNode;
  }

  var parents = [];

  while (!inst._hostNode) {
    parents.push(inst);
    invariant(
      inst._hostParent,
      "React DOM tree root should always have a node reference."
    );
    inst = inst._hostParent;
  }

  for (; parents.length; inst = parents.pop()) {
    precacheChildNodes(inst, inst._hostNode);
  }

  return inst._hostNode;
}
