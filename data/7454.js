{
  expect(
    createEvent({
      which: 2,
      button: 1
    }).button
  ).toBe(1);
}
