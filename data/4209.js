{
  var someMockFunction = mock.fn();
  expect(someMockFunction).not.toHaveBeenCalled();
  someMockFunction();
  expect(someMockFunction).toHaveBeenCalledTimes(1);
}
