{
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
}
