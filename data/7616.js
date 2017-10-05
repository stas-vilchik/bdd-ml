{
  expect(
    diff(
      {
        a: 1
      },
      {
        b: 2
      },
      {}
    )
  ).toEqual(null);
}
