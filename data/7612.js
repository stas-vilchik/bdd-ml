{
  expect(
    diff(
      {
        a: 1,
        c: 3
      },
      {
        b: 2,
        c: 3
      },
      {
        a: true,
        b: true
      }
    )
  ).toEqual({
    a: null,
    b: 2
  });
}
