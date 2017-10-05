{
  if (this.skip) return;
  var nodeWrapper = this.node;
  var newChildren = this.childNodes;
  var oldChildren = getChildNodesSnapshot(unwrap(nodeWrapper));
  var added = opt_added || new WeakMap();
  var splices = spliceDiff.calculateSplices(newChildren, oldChildren);
  var newIndex = 0,
    oldIndex = 0;
  var lastIndex = 0;

  for (var i = 0; i < splices.length; i++) {
    var splice = splices[i];

    for (; lastIndex < splice.index; lastIndex++) {
      oldIndex++;
      newChildren[newIndex++].sync(added);
    }

    var removedCount = splice.removed.length;

    for (var j = 0; j < removedCount; j++) {
      var wrapper = wrap(oldChildren[oldIndex++]);
      if (!added.get(wrapper)) remove(wrapper);
    }

    var addedCount = splice.addedCount;
    var refNode = oldChildren[oldIndex] && wrap(oldChildren[oldIndex]);

    for (var j = 0; j < addedCount; j++) {
      var newChildRenderNode = newChildren[newIndex++];
      var newChildWrapper = newChildRenderNode.node;
      insertBefore(nodeWrapper, newChildWrapper, refNode);
      added.set(newChildWrapper, true);
      newChildRenderNode.sync(added);
    }

    lastIndex += addedCount;
  }

  for (var i = lastIndex; i < newChildren.length; i++) {
    newChildren[i].sync(added);
  }
}
