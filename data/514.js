{
  var req = {
    path: "/foo"
  };
  var response = {
    status: 500,
    config: {
      validateStatus: function() {
        return false;
      }
    },
    request: req
  };
  settle(resolve, reject, response);
  expect(resolve).not.toHaveBeenCalled();
  expect(reject).toHaveBeenCalled();
  var reason = reject.calls.first().args[0];
  expect(reason instanceof Error).toBe(true);
  expect(reason.message).toBe("Request failed with status code 500");
  expect(reason.config).toBe(response.config);
  expect(reason.request).toBe(req);
  expect(reason.response).toBe(response);
}
