{
  expect(
    diff(
      {
        a: 1
      },
      {
        a: undefined
      },
      {
        a: true
      }
    )
  ).toEqual({
    a: null
  });
}
