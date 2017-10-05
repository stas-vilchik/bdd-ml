{
  serializer = sinon.stub();
  params = {
    foo: "bar"
  };
  serializer.returns("foo=bar");
  expect(buildURL("/foo", params, serializer)).toEqual("/foo?foo=bar");
  expect(serializer.calledOnce).toBe(true);
  expect(serializer.calledWith(params)).toBe(true);
}
