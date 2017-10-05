{
  var selection;

  if ("selectionStart" in input) {
    selection = {
      start: input.selectionStart,
      end: input.selectionEnd
    };
  } else {
    selection = ReactDOMSelection.getOffsets(input);
  }

  return (
    selection || {
      start: 0,
      end: 0
    }
  );
}
