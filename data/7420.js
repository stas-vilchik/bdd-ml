{
  var clipboardData = {
    dropEffect: null,
    effectAllowed: null,
    files: null,
    items: null,
    types: null
  };
  var clipboardEvent = createEvent({
    clipboardData: clipboardData
  });
  expect(clipboardEvent.clipboardData).toBe(clipboardData);
}
