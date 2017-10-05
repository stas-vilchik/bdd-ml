{
  expect(utils.isStream(new Stream.Readable())).toEqual(true);
  expect(
    utils.isStream({
      foo: "bar"
    })
  ).toEqual(false);
}
