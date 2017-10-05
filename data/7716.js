{
  var touches = nativeEvent.touches;

  if (!touches || touches.length === 0) {
    return true;
  }

  for (var i = 0; i < touches.length; i++) {
    var activeTouch = touches[i];
    var target = activeTouch.target;

    if (target !== null && target !== undefined && target !== 0) {
      var targetInst = EventPluginUtils.getInstanceFromNode(target);

      if (ReactTreeTraversal.isAncestor(responderInst, targetInst)) {
        return false;
      }
    }
  }

  return true;
}
