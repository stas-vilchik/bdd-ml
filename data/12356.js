{
  var tree = this._staticTrees[index];

  if (tree && !isInFor) {
    return Array.isArray(tree) ? cloneVNodes(tree) : cloneVNode(tree);
  }

  tree = this._staticTrees[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy
  );
  markStatic(tree, "__static__" + index, false);
  return tree;
}
