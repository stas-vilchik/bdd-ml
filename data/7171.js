{
  if (mx.type === "childList") {
    forEach(mx.addedNodes, function(n) {
      if (!n.localName) {
        return;
      }

      addedNode(n);
    });
    forEach(mx.removedNodes, function(n) {
      if (!n.localName) {
        return;
      }

      detachedNode(n);
    });
  }
}
