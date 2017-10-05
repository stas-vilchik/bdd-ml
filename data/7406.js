{
  var focusedElem = getActiveElement();
  return {
    focusedElem: focusedElem,
    selectionRange: ReactInputSelection.hasSelectionCapabilities(focusedElem)
      ? ReactInputSelection.getSelection(focusedElem)
      : null
  };
}
