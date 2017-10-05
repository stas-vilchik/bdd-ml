{
  var start = offsets.start;
  var end = offsets.end;

  if (end === undefined) {
    end = start;
  }

  if ("selectionStart" in input) {
    input.selectionStart = start;
    input.selectionEnd = Math.min(end, input.value.length);
  } else {
    ReactDOMSelection.setOffsets(input, offsets);
  }
}
