{
  var selection = window.getSelection && window.getSelection();

  if (!selection || selection.rangeCount === 0) {
    return null;
  }

  var anchorNode = selection.anchorNode;
  var anchorOffset = selection.anchorOffset;
  var focusNode = selection.focusNode;
  var focusOffset = selection.focusOffset;
  var currentRange = selection.getRangeAt(0);

  try {
    currentRange.startContainer.nodeType;
    currentRange.endContainer.nodeType;
  } catch (e) {
    return null;
  }

  var isSelectionCollapsed = isCollapsed(
    selection.anchorNode,
    selection.anchorOffset,
    selection.focusNode,
    selection.focusOffset
  );
  var rangeLength = isSelectionCollapsed ? 0 : currentRange.toString().length;
  var tempRange = currentRange.cloneRange();
  tempRange.selectNodeContents(node);
  tempRange.setEnd(currentRange.startContainer, currentRange.startOffset);
  var isTempRangeCollapsed = isCollapsed(
    tempRange.startContainer,
    tempRange.startOffset,
    tempRange.endContainer,
    tempRange.endOffset
  );
  var start = isTempRangeCollapsed ? 0 : tempRange.toString().length;
  var end = start + rangeLength;
  var detectionRange = document.createRange();
  detectionRange.setStart(anchorNode, anchorOffset);
  detectionRange.setEnd(focusNode, focusOffset);
  var isBackward = detectionRange.collapsed;
  return {
    start: isBackward ? end : start,
    end: isBackward ? start : end
  };
}
