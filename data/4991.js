{
  expect(() => {
    moduleMocker.spyOn(null, "method");
  }).toThrow();
  expect(() => {
    moduleMocker.spyOn({}, "method");
  }).toThrow();
  expect(() => {
    moduleMocker.spyOn(
      {
        method: 10
      },
      "method"
    );
  }).toThrow();
}
