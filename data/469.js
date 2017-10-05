{
  expect(thrown).toEqual(jasmine.any(Cancel));
  expect(thrown.message).toBe("Operation has been canceled.");
  done();
}
