support.r("post", "/mock/delete", user.token, {
  ids: [data.mocks[0]._id, data.mocks[1]._id]
});
