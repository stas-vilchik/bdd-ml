{
  if (node instanceof HTMLShadowElement) return;

  if (node instanceof HTMLContentElement) {
    var content = node;
    this.updateDependentAttributes(content.getAttribute("select"));
    var anyDistributed = false;

    for (var i = 0; i < pool.length; i++) {
      var node = pool[i];
      if (!node) continue;

      if (matches(node, content)) {
        destributeNodeInto(node, content);
        pool[i] = undefined;
        anyDistributed = true;
      }
    }

    if (!anyDistributed) {
      for (var child = content.firstChild; child; child = child.nextSibling) {
        destributeNodeInto(child, content);
      }
    }

    return;
  }

  for (var child = node.firstChild; child; child = child.nextSibling) {
    this.poolDistribution(child, pool);
  }
}
