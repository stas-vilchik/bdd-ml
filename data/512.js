{
  var response = {
    status: 500,
    config: {}
  };
  settle(resolve, reject, response);
  expect(resolve).toHaveBeenCalledWith(response);
  expect(reject).not.toHaveBeenCalled();
}
