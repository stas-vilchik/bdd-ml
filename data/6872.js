{
  var children = [];
  var p = node.shadowRoot || node;

  for (var child = p.firstChild; child; child = child.nextSibling) {
    if (isInsertionPoint(child)) {
      this.associateNode(p);
      var distributedNodes = getDistributedNodes(child);

      for (var j = 0; j < distributedNodes.length; j++) {
        var distributedNode = distributedNodes[j];
        if (isFinalDestination(child, distributedNode))
          children.push(distributedNode);
      }
    } else {
      children.push(child);
    }
  }

  return children;
}
