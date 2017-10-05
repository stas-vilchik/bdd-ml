{
  if (isUnOptimizableTree(node)) {
    node.ssrOptimizability = optimizability.FALSE;
    return;
  }

  var selfUnoptimizable = isRoot || hasCustomDirective(node);

  var check = function(child) {
    if (child.ssrOptimizability !== optimizability.FULL) {
      node.ssrOptimizability = selfUnoptimizable
        ? optimizability.PARTIAL
        : optimizability.SELF;
    }
  };

  if (selfUnoptimizable) {
    node.ssrOptimizability = optimizability.CHILDREN;
  }

  if (node.type === 1) {
    for (var i = 0, l = node.children.length; i < l; i++) {
      var child = node.children[i];
      walk(child);
      check(child);
    }

    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        var block = node.ifConditions[i$1].block;
        walk(block);
        check(block);
      }
    }

    if (
      node.ssrOptimizability == null ||
      (!isRoot && (node.attrsMap["v-html"] || node.attrsMap["v-text"]))
    ) {
      node.ssrOptimizability = optimizability.FULL;
    } else {
      node.children = optimizeSiblings(node);
    }
  } else {
    node.ssrOptimizability = optimizability.FULL;
  }
}
