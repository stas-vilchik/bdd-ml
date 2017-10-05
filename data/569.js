{
  var date = new Date();
  expect(
    buildURL("/foo", {
      date: date
    })
  ).toEqual("/foo?date=" + date.toISOString());
}
