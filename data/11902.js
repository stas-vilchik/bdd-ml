{
  var children = el.children;
  var optimizedChildren = [];
  var currentOptimizableGroup = [];

  var pushGroup = function() {
    if (currentOptimizableGroup.length) {
      optimizedChildren.push({
        type: 1,
        parent: el,
        tag: "template",
        attrsList: [],
        attrsMap: {},
        children: currentOptimizableGroup,
        ssrOptimizability: optimizability.FULL
      });
    }

    currentOptimizableGroup = [];
  };

  for (var i = 0; i < children.length; i++) {
    var c = children[i];

    if (c.ssrOptimizability === optimizability.FULL) {
      currentOptimizableGroup.push(c);
    } else {
      pushGroup();
      optimizedChildren.push(c);
    }
  }

  pushGroup();
  return optimizedChildren;
}
