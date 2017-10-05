{
  var path = [];
  var current = node;
  path.push(current);

  while (current) {
    var destinationInsertionPoints = getDestinationInsertionPoints(current);

    if (destinationInsertionPoints && destinationInsertionPoints.length > 0) {
      for (var i = 0; i < destinationInsertionPoints.length; i++) {
        var insertionPoint = destinationInsertionPoints[i];

        if (isShadowInsertionPoint(insertionPoint)) {
          var shadowRoot = rootOfNode(insertionPoint);
          var olderShadowRoot = shadowRoot.olderShadowRoot;
          if (olderShadowRoot) path.push(olderShadowRoot);
        }

        path.push(insertionPoint);
      }

      current =
        destinationInsertionPoints[destinationInsertionPoints.length - 1];
    } else {
      if (isShadowRoot(current)) {
        if (inSameTree(node, current) && eventMustBeStopped(event)) {
          break;
        }

        current = current.host;
        path.push(current);
      } else {
        current = current.parentNode;
        if (current) path.push(current);
      }
    }
  }

  return path;
}
