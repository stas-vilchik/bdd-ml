{
  var doc =
    nativeEventTarget.window === nativeEventTarget
      ? nativeEventTarget.document
      : nativeEventTarget.nodeType === DOCUMENT_NODE
        ? nativeEventTarget
        : nativeEventTarget.ownerDocument;

  if (!doc || !isListeningToAllDependencies("onSelect", doc)) {
    return null;
  }

  var targetNode = targetInst
    ? ReactDOMComponentTree.getNodeFromInstance(targetInst)
    : window;

  switch (topLevelType) {
    case "topFocus":
      if (
        isTextInputElement(targetNode) ||
        targetNode.contentEditable === "true"
      ) {
        activeElement = targetNode;
        activeElementInst = targetInst;
        lastSelection = null;
      }

      break;

    case "topBlur":
      activeElement = null;
      activeElementInst = null;
      lastSelection = null;
      break;

    case "topMouseDown":
      mouseDown = true;
      break;

    case "topContextMenu":
    case "topMouseUp":
      mouseDown = false;
      return constructSelectEvent(nativeEvent, nativeEventTarget);

    case "topSelectionChange":
      if (skipSelectionChangeEvent) {
        break;
      }

    case "topKeyDown":
    case "topKeyUp":
      return constructSelectEvent(nativeEvent, nativeEventTarget);
  }

  return null;
}
