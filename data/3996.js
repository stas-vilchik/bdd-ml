{
  const $ = require("jquery");

  const fetchCurrentUser = require("../fetchCurrentUser");

  const callback = jest.fn();
  fetchCurrentUser(callback);
  $.ajax.mock.calls[0][0].success({
    firstName: "Bobby",
    lastName: "Marley"
  });
  expect(callback.mock.calls[0][0]).toEqual({
    fullName: "Bobby Marley",
    loggedIn: true
  });
}
