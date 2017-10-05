{
  expect(
    diff(
      {
        a: 1,
        c: 3
      },
      {},
      {
        a: true,
        b: true
      }
    )
  ).toEqual({
    a: null
  });
  expect(
    diff(
      {},
      {
        a: 1,
        c: 3
      },
      {
        a: true,
        b: true
      }
    )
  ).toEqual({
    a: 1
  });
  expect(
    diff(
      {},
      {},
      {
        a: true,
        b: true
      }
    )
  ).toEqual(null);
}
