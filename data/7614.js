{
  expect(
    diff(
      {
        a: 1
      },
      {},
      {
        a: true
      }
    )
  ).toEqual({
    a: null
  });
}
