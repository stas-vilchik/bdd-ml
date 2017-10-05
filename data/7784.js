{
  expect(function() {
    accumulateInto([], null);
  }).toThrowError(
    "accumulateInto(...): Accumulated items must not be null or undefined."
  );
}
