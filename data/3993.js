{
  document.body.innerHTML =
    "<div>" +
    '  <span id="username" />' +
    '  <button id="button" />' +
    "</div>";

  require("../displayUser");

  const $ = require("jquery");

  const fetchCurrentUser = require("../fetchCurrentUser");

  fetchCurrentUser.mockImplementation(cb => {
    cb({
      fullName: "Johnny Cash",
      loggedIn: true
    });
  });
  $("#button").click();
  expect(fetchCurrentUser).toBeCalled();
  expect($("#username").text()).toEqual("Johnny Cash - Logged In");
}
