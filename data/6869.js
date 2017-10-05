{
  if (isShadowHost(node)) {
    var shadowHost = node;
    var pool = poolPopulation(shadowHost);
    var shadowTrees = getShadowTrees(shadowHost);

    for (var i = 0; i < shadowTrees.length; i++) {
      this.poolDistribution(shadowTrees[i], pool);
    }

    for (var i = shadowTrees.length - 1; i >= 0; i--) {
      var shadowTree = shadowTrees[i];
      var shadow = getShadowInsertionPoint(shadowTree);

      if (shadow) {
        var olderShadowRoot = shadowTree.olderShadowRoot;

        if (olderShadowRoot) {
          pool = poolPopulation(olderShadowRoot);
        }

        for (var j = 0; j < pool.length; j++) {
          destributeNodeInto(pool[j], shadow);
        }
      }

      this.distributionResolution(shadowTree);
    }
  }

  for (var child = node.firstChild; child; child = child.nextSibling) {
    this.distributionResolution(child);
  }
}
