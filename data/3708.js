support.r("post", "/mock/update", user.token, {
  id: data.mocks[0]._id,
  url: "/proxy2"
});
