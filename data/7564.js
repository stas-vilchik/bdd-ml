{
  if (!fiber) {
    return [];
  }

  var currentParent = ReactFiberTreeReflection.findCurrentFiberUsingSlowPath(
    fiber
  );

  if (!currentParent) {
    return [];
  }

  let node = currentParent;
  let ret = [];

  while (true) {
    if (
      node.tag === HostComponent ||
      node.tag === HostText ||
      node.tag === ClassComponent ||
      node.tag === FunctionalComponent
    ) {
      var publicInst = node.stateNode;

      if (test(publicInst)) {
        ret.push(publicInst);
      }
    }

    if (node.child) {
      node.child.return = node;
      node = node.child;
      continue;
    }

    if (node === currentParent) {
      return ret;
    }

    while (!node.sibling) {
      if (!node.return || node.return === currentParent) {
        return ret;
      }

      node = node.return;
    }

    node.sibling.return = node.return;
    node = node.sibling;
  }
}
