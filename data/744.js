{
  var output = new Int8Array(request.params);
  expect(output.length).toEqual(2);
  expect(output[0]).toEqual(1);
  expect(output[1]).toEqual(2);
  done();
}
