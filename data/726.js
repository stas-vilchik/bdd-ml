{
  expect(resolveSpy).toHaveBeenCalled();
  expect(rejectSpy).not.toHaveBeenCalled();
  done();
}
