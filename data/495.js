{
  expect(value).toEqual(jasmine.any(Cancel));
  expect(value.message).toBe("Operation has been canceled.");
  done();
}
