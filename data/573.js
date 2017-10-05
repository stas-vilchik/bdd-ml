{
  expect(
    buildURL("/foo", {
      query: "bar",
      start: 0,
      length: 5
    })
  ).toEqual("/foo?query=bar&start=0&length=5");
}
