{
  var response = {
    status: 500,
    config: {
      validateStatus: function() {
        return true;
      }
    }
  };
  settle(resolve, reject, response);
  expect(resolve).toHaveBeenCalledWith(response);
  expect(reject).not.toHaveBeenCalled();
}
