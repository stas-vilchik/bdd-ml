{
  var nativeEvent = {};
  var syntheticEvent = createEvent(nativeEvent);
  expect(syntheticEvent.isDefaultPrevented()).toBe(false);
  syntheticEvent.preventDefault();
  expect(syntheticEvent.isDefaultPrevented()).toBe(true);
  expect(syntheticEvent.isPropagationStopped()).toBe(false);
  syntheticEvent.stopPropagation();
  expect(syntheticEvent.isPropagationStopped()).toBe(true);
}
