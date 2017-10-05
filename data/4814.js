{
  expect(data.map.Strawberry[H.GENERIC_PLATFORM]).not.toBeDefined();
  expect(console.warn.mock.calls[0][0]).toMatchSnapshot();
}
