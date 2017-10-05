{
  var syntheticEvent = createEvent({});
  expect(syntheticEvent.isPersistent()).toBe(false);
  syntheticEvent.persist();
  expect(syntheticEvent.isPersistent()).toBe(true);
}
