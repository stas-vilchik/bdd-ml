{
  var data;
  data = transformData(data, null, function(data) {
    data = "foo";
    return data;
  });
  expect(data).toEqual("foo");
}
