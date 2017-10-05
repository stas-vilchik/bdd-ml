{
  var target = document.createElement("div");
  var syntheticEvent = createEvent({
    srcElement: target
  });
  expect(syntheticEvent.target).toBe(target);
  expect(syntheticEvent.type).toBe(undefined);
}
