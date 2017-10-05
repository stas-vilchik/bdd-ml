{
  var targetInst = bookKeeping.targetInst;
  var ancestor = targetInst;

  do {
    if (!ancestor) {
      bookKeeping.ancestors.push(ancestor);
      break;
    }

    var root = findRootContainerNode(ancestor);

    if (!root) {
      break;
    }

    bookKeeping.ancestors.push(ancestor);
    ancestor = ReactDOMComponentTree.getClosestInstanceFromNode(root);
  } while (ancestor);

  for (var i = 0; i < bookKeeping.ancestors.length; i++) {
    targetInst = bookKeeping.ancestors[i];

    ReactDOMEventListener._handleTopLevel(
      bookKeeping.topLevelType,
      targetInst,
      bookKeeping.nativeEvent,
      getEventTarget(bookKeeping.nativeEvent)
    );
  }
}
