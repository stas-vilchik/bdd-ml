{
  var validateStatus = jasmine.createSpy("validateStatus");
  var response = {
    status: 500,
    config: {
      validateStatus: validateStatus
    }
  };
  settle(resolve, reject, response);
  expect(validateStatus).toHaveBeenCalledWith(500);
}
