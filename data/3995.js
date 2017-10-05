{
  const $ = require("jquery");

  const fetchCurrentUser = require("../fetchCurrentUser");

  const dummyCallback = () => {};

  fetchCurrentUser(dummyCallback);
  expect($.ajax).toBeCalledWith({
    success: expect.any(Function),
    type: "GET",
    url: "http://example.com/currentUser"
  });
}
