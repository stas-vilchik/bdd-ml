{
  var standardEvent = createEvent({
    deltaX: 10,
    deltaY: -50
  });
  expect(standardEvent.deltaX).toBe(10);
  expect(standardEvent.deltaY).toBe(-50);
  var webkitEvent = createEvent({
    wheelDeltaX: -10,
    wheelDeltaY: 50
  });
  expect(webkitEvent.deltaX).toBe(10);
  expect(webkitEvent.deltaY).toBe(-50);
}
