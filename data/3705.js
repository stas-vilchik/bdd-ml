{
  const mocks = data.mocks;
  const mock = mocks[0];
  const id = mock.url === "/proxy" ? mocks[1]._id : mock._id;
  return support.r("post", "/mock/update", user.token, {
    id,
    url: "/proxy"
  });
}
