{
  return $.ajax({
    success: user => callback(parseJSON(user)),
    type: "GET",
    url: "http://example.com/currentUser"
  });
}
